import tokens from './design/tokens'

/**
 * Theme utility functions
 */

/**
 * Gets a color from the design tokens
 */
export function getColor(colorName: string, variant = 'DEFAULT'): string | null {
  const colorPath = colorName.split('.')

  if (colorPath.length === 1) {
    // Check if it's a semantic color with variants
    if (variant !== 'DEFAULT' && `${colorName}-${variant}` in tokens.semanticColors) {
      return tokens.semanticColors[`${colorName}-${variant}` as keyof typeof tokens.semanticColors]
    }

    // Check if it's a semantic color
    if (colorName in tokens.semanticColors) {
      return tokens.semanticColors[colorName as keyof typeof tokens.semanticColors]
    }
  } else if (colorPath.length === 2) {
    // It's a color scale
    const [scale, shade] = colorPath
    if (scale in tokens.colors) {
      const colorScale = tokens.colors[scale as keyof typeof tokens.colors]
      if (typeof colorScale === 'object' && shade in colorScale) {
        return colorScale[shade as keyof typeof colorScale]
      }
    }
  }

  return null
}

/**
 * Gets a gradient from the design tokens
 */
export function getGradient(gradientName: string): string | null {
  if (gradientName in tokens.gradients) {
    return tokens.gradients[gradientName as keyof typeof tokens.gradients]
  }
  return null
}

/**
 * Export the theme
 */
export const theme = {
  ...tokens,
  getColor,
  getGradient,
}

export default theme
