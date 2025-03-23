import tokens from './tokens'

/**
 * Generates CSS variables from design tokens
 */
export function generateCssVariables(): Record<string, string> {
  return {
    // HSL values for shadcn/ui compatibility
    ...Object.entries(tokens.hslValues).reduce(
      (acc, [key, value]) => {
        acc[`--${key}`] = value
        return acc
      },
      {} as Record<string, string>
    ),

    // Add radius variable
    '--radius': tokens.borderRadius.lg,

    // Add font variable
    '--font-sans': tokens.typography.fontFamily.sans.join(', '),
  }
}

/**
 * Generates CSS variable declarations as a string
 */
export function generateCssVariablesString(): string {
  const variables = generateCssVariables()
  return Object.entries(variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ')
}

export default generateCssVariables
