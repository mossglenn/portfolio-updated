import tokens from './tokens'

/**
 * Generates Tailwind config from design tokens
 */
export function generateTailwindConfig() {
  return {
    colors: {
      // Color scales
      ochre: tokens.colors.ochre,
      slate: tokens.colors.slate,
      sage: tokens.colors.sage,
      sand: tokens.colors.sand,
      carbon: tokens.colors.carbon,

      // Semantic colors
      primary: {
        DEFAULT: tokens.semanticColors.primary,
        hover: tokens.semanticColors['primary-hover'],
        light: tokens.semanticColors['primary-light'],
        dark: tokens.semanticColors['primary-dark'],
        muted: tokens.semanticColors['primary-muted'],
      },
      secondary: {
        DEFAULT: tokens.semanticColors.secondary,
        hover: tokens.semanticColors['secondary-hover'],
        light: tokens.semanticColors['secondary-light'],
        dark: tokens.semanticColors['secondary-dark'],
        muted: tokens.semanticColors['secondary-muted'],
      },
      accent: {
        DEFAULT: tokens.semanticColors.accent,
        hover: tokens.semanticColors['accent-hover'],
        light: tokens.semanticColors['accent-light'],
        dark: tokens.semanticColors['accent-dark'],
        muted: tokens.semanticColors['accent-muted'],
      },
      'soft-sand': {
        DEFAULT: tokens.semanticColors['soft-sand'],
        dark: tokens.semanticColors['soft-sand-dark'],
        muted: tokens.semanticColors['soft-sand-muted'],
      },
      'foundation-black': {
        DEFAULT: tokens.semanticColors['foundation-black'],
        light: tokens.semanticColors['foundation-black-light'],
        muted: tokens.semanticColors['foundation-black-muted'],
      },

      // shadcn/ui theme colors
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
    },

    backgroundImage: {
      'gradient-ochre': tokens.gradients.ochre,
      'gradient-slate': tokens.gradients.slate,
      'gradient-sage': tokens.gradients.sage,
      'gradient-warm-dark': tokens.gradients['warm-dark'],
      'gradient-light-wash': tokens.gradients['light-wash'],
    },

    borderRadius: tokens.borderRadius,

    fontFamily: tokens.typography.fontFamily,

    fontSize: tokens.typography.fontSize,

    fontWeight: tokens.typography.fontWeight,

    lineHeight: tokens.typography.lineHeight,

    spacing: tokens.spacing,

    boxShadow: tokens.shadows,
  }
}

export default generateTailwindConfig
