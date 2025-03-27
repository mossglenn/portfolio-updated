
:root {
  --color-brand: #734CA9;   /* Brand color (violet) */
  --color-light: #D1A7E4;   /* Light violet for subtle accents */
  --color-dark: #39344B;    /* Deep purple for backgrounds */
  --color-neutral: #BEB8CD; /* Light gray text */
  --color-dark-text: #5C3C87; /* Darker violet for subtitle */
  --color-accent: #E3A34E;  /* Amber accent */
  --color-light-text: #FFFFFF; /* White text for contrast */
  --color-muted-text: #5C3C87; /* Muted purple for text */
  --color-background: #292A3E; /* Background color (dark slate) */
  --color-card: #343A47;   /* Card background */
}


module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        neutral: "var(--color-neutral)",
        accent: "var(--color-accent)",
        'light-text': "var(--color-light-text)",
        'dark-text': "var(--color-dark-text)",
        'muted-text': "var(--color-muted-text)",
        background: "var(--color-background)",
        card: "var(--color-card)",
      },
    },
  },
  plugins: [],
}




<div class="bg-[var(--color-background)] text-[var(--color-light-text)]">
  <!-- Content goes here -->
</div>


--color-brand: Main brand color, used for badges, CTA buttons, and highlights.

--color-light: Used for light accents or text on darker backgrounds.

--color-dark: Dark, rich backgrounds or sections with heavy text.

--color-neutral: Light gray for softer text or background elements.

--color-dark-text: For headings or subtitle badges.

--color-accent: Amber accent color for special elements like buttons or highlights.

--color-light-text: White text for high contrast.

--color-muted-text: For less important text, like subheadings or secondary information.

--color-background: Main background color for dark mode.

--color-card: Background for cards or containers.