import tokens from './tokens'

/**
 * Component-specific design tokens
 * These tokens are used to style specific components
 */

export const buttonTokens = {
  // Base styles
  base: {
    height: tokens.spacing[10],
    paddingX: tokens.spacing[4],
    paddingY: tokens.spacing[2],
    fontSize: tokens.typography.fontSize.sm,
    fontWeight: tokens.typography.fontWeight.medium,
    borderRadius: tokens.borderRadius.md,
  },

  // Variants
  variants: {
    default: {
      background: tokens.semanticColors.primary,
      text: tokens.semanticColors['primary-foreground'],
      hoverBackground: tokens.semanticColors['primary-hover'],
    },
    secondary: {
      background: tokens.semanticColors.secondary,
      text: tokens.semanticColors['secondary-foreground'],
      hoverBackground: tokens.semanticColors['secondary-hover'],
    },
    accent: {
      background: tokens.semanticColors.accent,
      text: tokens.semanticColors['accent-foreground'],
      hoverBackground: tokens.semanticColors['accent-hover'],
    },
    outline: {
      background: 'transparent',
      text: tokens.semanticColors.foreground,
      border: tokens.semanticColors.border,
      hoverBackground: tokens.semanticColors.accent,
      hoverText: tokens.semanticColors['accent-foreground'],
    },
    ghost: {
      background: 'transparent',
      text: tokens.semanticColors.foreground,
      hoverBackground: tokens.semanticColors.accent,
      hoverText: tokens.semanticColors['accent-foreground'],
    },
    link: {
      background: 'transparent',
      text: tokens.semanticColors.primary,
      hoverText: tokens.semanticColors.primary,
      textDecoration: 'underline',
    },
    destructive: {
      background: 'hsl(var(--destructive))',
      text: 'hsl(var(--destructive-foreground))',
      hoverBackground: 'hsl(var(--destructive) / 0.9)',
    },
  },

  // Sizes
  sizes: {
    sm: {
      height: tokens.spacing[9],
      paddingX: tokens.spacing[3],
      fontSize: tokens.typography.fontSize.xs,
    },
    default: {
      height: tokens.spacing[10],
      paddingX: tokens.spacing[4],
      fontSize: tokens.typography.fontSize.sm,
    },
    lg: {
      height: tokens.spacing[11],
      paddingX: tokens.spacing[8],
      fontSize: tokens.typography.fontSize.base,
    },
    icon: {
      height: tokens.spacing[10],
      width: tokens.spacing[10],
      padding: '0',
    },
  },
}

export const cardTokens = {
  base: {
    background: 'hsl(var(--card))',
    text: 'hsl(var(--card-foreground))',
    border: 'hsl(var(--border))',
    borderRadius: tokens.borderRadius.lg,
    shadow: tokens.shadows.sm,
  },

  parts: {
    header: {
      paddingX: tokens.spacing[6],
      paddingY: tokens.spacing[6],
      paddingBottom: tokens.spacing[1.5],
    },
    content: {
      paddingX: tokens.spacing[6],
      paddingY: tokens.spacing[0],
    },
    footer: {
      paddingX: tokens.spacing[6],
      paddingY: tokens.spacing[6],
      paddingTop: tokens.spacing[0],
    },
    title: {
      fontSize: tokens.typography.fontSize['2xl'],
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.tight,
    },
    description: {
      fontSize: tokens.typography.fontSize.sm,
      color: 'hsl(var(--muted-foreground))',
    },
  },
}

export const inputTokens = {
  base: {
    height: tokens.spacing[10],
    background: 'hsl(var(--background))',
    text: 'hsl(var(--foreground))',
    border: 'hsl(var(--input))',
    borderRadius: tokens.borderRadius.md,
    fontSize: tokens.typography.fontSize.sm,
    paddingX: tokens.spacing[3],
    paddingY: tokens.spacing[2],
  },

  states: {
    focus: {
      ring: 'hsl(var(--ring))',
      ringWidth: '2px',
      ringOffset: '2px',
    },
    disabled: {
      opacity: '0.5',
    },
  },
}

const componentTokens = {
  button: buttonTokens,
  card: cardTokens,
  input: inputTokens,
}
export default componentTokens
