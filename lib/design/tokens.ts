/**
 * Design Tokens for Constructed Clarity Theme
 *
 * This file serves as the single source of truth for all design values.
 * It defines colors, typography, spacing, and other design elements.
 */

// Color palette with scales
export const colors = {
  ochre: {
    50: '#fff8e6',
    100: '#ffefc4',
    200: '#ffe3a3',
    300: '#ffd682',
    400: '#f0b861',
    500: '#d6a04f', // Primary
    600: '#c9913f', // Hover
    700: '#b07c39', // Dark
    800: '#8c6330',
    900: '#6b4b24',
    950: '#422d16',
  },
  slate: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#50627e', // Light
    700: '#3a4a64', // Secondary
    800: '#2c3b52', // Dark
    900: '#1e2a3a',
    950: '#0f172a',
  },
  sage: {
    50: '#f1f8f3',
    100: '#e2f1e7',
    200: '#d6e6cc',
    300: '#b7d3b7', // Light
    400: '#99c2a2', // Accent
    500: '#89b293', // Hover
    600: '#7ea78c', // Dark
    700: '#5e8c6a',
    800: '#4a6e53',
    900: '#395a43',
    950: '#1f3024',
  },
  sand: {
    50: '#f8f4ec', // Soft Sand
    100: '#eae3d6', // Dark
    200: '#dfd3c3',
    300: '#d3c3af',
    400: '#c7b39c',
    500: '#bba389',
    600: '#a99377',
    700: '#8c7a63',
    800: '#6f6151',
    900: '#524840',
    950: '#352e29',
  },
  carbon: {
    50: '#f5f5f6',
    100: '#e5e6e8',
    200: '#cfd1d5',
    300: '#b0b3ba',
    400: '#888d98',
    500: '#6d727f',
    600: '#565b69',
    700: '#444956',
    800: '#2a2d31', // Light
    900: '#1e2024',
    950: '#121417', // Foundation Black
  },
}

// Semantic color tokens
export const semanticColors = {
  primary: colors.ochre[500],
  'primary-hover': colors.ochre[600],
  'primary-light': colors.ochre[400],
  'primary-dark': colors.ochre[700],
  'primary-muted': `${colors.ochre[500]}66`, // 40% opacity

  secondary: colors.slate[700],
  'secondary-hover': colors.slate[800],
  'secondary-light': colors.slate[600],
  'secondary-dark': colors.slate[800],
  'secondary-muted': `${colors.slate[700]}80`, // 50% opacity

  accent: colors.sage[400],
  'accent-hover': colors.sage[500],
  'accent-light': colors.sage[300],
  'accent-dark': colors.sage[600],
  'accent-muted': `${colors.sage[400]}80`, // 50% opacity

  'soft-sand': colors.sand[50],
  'soft-sand-dark': colors.sand[100],
  'soft-sand-muted': `${colors.sand[50]}b3`, // 70% opacity

  'foundation-black': colors.carbon[950],
  'foundation-black-light': colors.carbon[800],
  'foundation-black-muted': `${colors.carbon[950]}80`, // 50% opacity
}

// Gradients
export const gradients = {
  ochre: `linear-gradient(to right, ${colors.ochre[500]}, ${colors.ochre[400]}, ${colors.ochre[200]})`,
  slate: `linear-gradient(to right, ${colors.slate[700]}, ${colors.slate[600]}, ${colors.slate[400]})`,
  sage: `linear-gradient(to right, ${colors.sage[400]}, ${colors.sage[300]}, ${colors.sage[200]})`,
  'warm-dark': `linear-gradient(to right, ${colors.carbon[950]}, ${colors.carbon[800]}, ${colors.slate[700]})`,
  'light-wash': `linear-gradient(to right, ${colors.sand[50]}, ${colors.sand[100]}, ${colors.sand[200]})`,
}

// HSL values for CSS variables
export const hslValues = {
  background: '43 50% 95%', // Soft Sand
  foreground: '220 10% 8%', // Foundation Black
  card: '43 30% 90%',
  'card-foreground': '220 10% 8%',
  primary: '38 60% 57%', // Ochre
  'primary-foreground': '220 10% 8%',
  secondary: '219 27% 31%', // Slate
  'secondary-foreground': '43 50% 95%',
  accent: '130 25% 68%', // Sage
  'accent-foreground': '220 10% 8%',
  muted: '43 20% 87%',
  'muted-foreground': '219 27% 31%',
  border: '43 20% 80%',
  input: '43 20% 87%',
  ring: '38 60% 57%',
}

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

// Typography
export const typography = {
  fontFamily: {
    sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
    serif: ['Georgia', 'serif'],
    mono: ['Menlo', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
}

// Spacing
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
}

// Theme metadata
export const metadata = {
  name: 'Constructed Clarity',
  description: 'A thoughtful, crafted theme for learning designers who value clarity and depth.',
  version: '1.1.0',
}

// Export all tokens
export const tokens = {
  colors,
  semanticColors,
  gradients,
  hslValues,
  borderRadius,
  typography,
  spacing,
  shadows,
  metadata,
}

export default tokens
