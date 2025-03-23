import tokens from './tokens'

/**
 * Converts a hex color to HSL format
 * @param hex Hex color code (e.g., #ffffff)
 * @returns HSL values as a string (e.g., "0 0% 100%")
 */
export function hexToHSL(hex: string): string {
  hex = hex.replace('#', '')
  const r = Number.parseInt(hex.substring(0, 2), 16) / 255
  const g = Number.parseInt(hex.substring(2, 4), 16) / 255
  const b = Number.parseInt(hex.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2

  let h = 0
  let s = 0

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60
        break
      case g:
        h = ((b - r) / d + 2) * 60
        break
      case b:
        h = ((r - g) / d + 4) * 60
        break
    }
  }

  h = Math.round(h)
  s = Math.round(s * 100)
  const lightness = Math.round(l * 100)

  return `${h} ${s}% ${lightness}%`
}

/**
 * Generates a color palette from a base color
 * @param baseColor Base color in hex format
 * @returns Object with color variants from 50 to 950
 */
export function generateColorPalette(baseColor: string): Record<number, string> {
  const hsl = hexToHSL(baseColor)
  const [h, s, l] = hsl.split(' ').map((val) => Number.parseInt(val))

  return {
    50: `hsl(${h}, ${Math.max(s - 30, 0)}%, ${Math.min(l + 40, 97)}%)`,
    100: `hsl(${h}, ${Math.max(s - 25, 0)}%, ${Math.min(l + 35, 95)}%)`,
    200: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${Math.min(l + 30, 90)}%)`,
    300: `hsl(${h}, ${Math.max(s - 15, 0)}%, ${Math.min(l + 20, 85)}%)`,
    400: `hsl(${h}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 10, 80)}%)`,
    500: `hsl(${h}, ${s}%, ${l}%)`,
    600: `hsl(${h}, ${Math.min(s + 5, 100)}%, ${Math.max(l - 10, 15)}%)`,
    700: `hsl(${h}, ${Math.min(s + 10, 100)}%, ${Math.max(l - 20, 10)}%)`,
    800: `hsl(${h}, ${Math.min(s + 15, 100)}%, ${Math.max(l - 30, 5)}%)`,
    900: `hsl(${h}, ${Math.min(s + 20, 100)}%, ${Math.max(l - 40, 3)}%)`,
    950: `hsl(${h}, ${Math.min(s + 25, 100)}%, ${Math.max(l - 45, 2)}%)`,
  }
}

/**
 * Gets a specific token value from the token object
 * @param path Path like "colors.ochre.500"
 * @returns Token value or undefined
 */
export function getToken<T = unknown>(path: string): T | undefined {
  const parts = path.split('.')
  let result: unknown = tokens

  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = (result as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }

  return result as T
}

const themeUtils = {
  hexToHSL,
  generateColorPalette,
  getToken,
}

export default themeUtils
