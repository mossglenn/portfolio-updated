import re
from pathlib import Path
import colorsys
import webbrowser
from datetime import datetime

# === Configuration ===
globals_css_path = Path("./app/globals.css")
output_html_path = Path("./.reference-files/color-reference.html")

# === HTML Template Parts ===
HTML_HEAD = """
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Color Tokens Reference</title>
  <style>
"""

HTML_STYLE_TAIL = """
    body { font-family: sans-serif; background: #0a0a0a; padding: 2rem; color: #e0e0e0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
    .swatch { background: #1a1a1a; padding: 1rem; border: 1px solid #444; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
    .color-box { height: 48px; border-radius: 4px; border: 1px solid #666; margin-bottom: 0.75rem; }
    code { background: #333; padding: 3px 6px; border-radius: 4px; font-size: 0.875rem; color: #f8f8f8; display: inline-block; margin: 4px 0; line-height: 1.4; }
    h2 { margin-top: 3rem; }
    .preview-block div { margin-bottom: 6px; padding: 6px; border-radius: 4px; font-size: 0.875rem; text-align: center; }
    .timestamp { margin-bottom: 1.5rem; font-size: 0.9rem; color: #aaa; }
  </style>
</head>
<body>
  <h1>Color Tokens Reference</h1>
  <div class='timestamp'>Generated on {timestamp}</div>
  <div class='sort-controls' style='margin-bottom: 1rem;'>
    <button onclick="sortBy('alphabet')">Sort: A–Z</button>
    <button onclick="sortBy('hue')">Sort: Hue</button>
    <button onclick="sortBy('group')">Sort: Group</button>
  </div>
  <div class='grid'>
"""

HTML_TAIL = """
  </div>

  <script>
    function sortBy(mode) {
      const grid = document.querySelector('.grid');
      const cards = Array.from(grid.children);
      const getHue = el => parseFloat(el.dataset.hue || 0);
      const getGroup = el => el.dataset.group || "";
      const getName = el => el.dataset.name || "";

      cards.sort((a, b) => {
        if (mode === 'hue') return getHue(a) - getHue(b);
        if (mode === 'group') return getGroup(a).localeCompare(getGroup(b)) || getName(a).localeCompare(getName(b));
        return getName(a).localeCompare(getName(b)); // default: alphabet
      });

      cards.forEach(card => grid.appendChild(card));
    }
  </script>
</body>
</html>
"""

# === Script ===
def extract_root_block(css_text):
    match = re.search(r":root\s*{([^}]*)}" , css_text, re.DOTALL)
    return f":root {{{match.group(1)}}}" if match else ""

def hsl_to_hex(hsl):
    try:
        h, s, l = re.findall(r"[-+]?[0-9]*\.?[0-9]+", hsl)
        h, s, l = float(h), float(s), float(l)
        h /= 360
        s /= 100
        l /= 100
        r, g, b = colorsys.hls_to_rgb(h, l, s)
        return f"#{int(r*255):02x}{int(g*255):02x}{int(b*255):02x}"
    except Exception:
        return None

def generate_color_cards(css_vars):
    color_lines = re.findall(r"--([\w-]+):\s*([^;]+);", css_vars)
    cards = []
    for name, value in color_lines:
        if "gradient" in name:
            box_style = f"background-image: var(--{name});"
            desc = f"Gradient: --{name}"
            extra = ""
        else:
            box_style = f"background-color: hsl(var(--{name}));"
            desc = f"--{name}"
            hex_value = hsl_to_hex(value)
            hex_display = f"<div>HEX: <code>{hex_value}</code></div>" if hex_value else "<div style='color: red;'>⚠️ Invalid HSL</div>"
            preview = f"""
            <div class='preview-block'>
              <div style='background-color: hsl(var(--{name})); color: #fff;'>bg</div>
              <div style='color: hsl(var(--{name})); background: #333;'>text</div>
              <div style='border: 2px solid hsl(var(--{name}));'>border</div>
            </div>
            """
            extra = hex_display + preview

        hue = value.split(',')[0] if 'gradient' not in name else '0'
        group = name.split('-')[0] if '-' in name else name
        cards.append(f"""
        <div class='swatch' data-name='{name}' data-hue='{hue}' data-group='{group}'>
          <div class='color-box' style='{box_style}'></div>
          <div><strong>{desc}</strong></div>
          <div style='margin-bottom: 0.5rem;'>HSL: <code>{value}</code></div>
          {extra}
        </div>""")
    return "\n".join(cards)

def main():
    css_text = globals_css_path.read_text()
    css_vars = extract_root_block(css_text)
    color_cards_html = generate_color_cards(css_vars)
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    full_html = HTML_HEAD + css_vars + HTML_STYLE_TAIL.replace("{timestamp}", timestamp) + color_cards_html + HTML_TAIL
    output_html_path.write_text(full_html)
    print(f"✅ Generated {output_html_path.resolve()}")

    # Open the generated file in the default browser
    webbrowser.open(output_html_path.resolve().as_uri())

if __name__ == "__main__":
    main()
