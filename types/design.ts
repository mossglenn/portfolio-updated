/**
 * Design system type definitions
 */

// Color types
export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export type ColorScales = {
  [key: string]: ColorScale
}

export type SemanticColors = {
  [key: string]: string
}

export type Gradients = {
  [key: string]: string
}

// Typography types
export type FontFamily = {
  [key: string]: string[]
}

export type FontSize = {
  [key: string]: string
}

export type FontWeight = {
  [key: string]: string
}

export type LineHeight = {
  [key: string]: string
}

export type Typography = {
  fontFamily: FontFamily
  fontSize: FontSize
  fontWeight: FontWeight
  lineHeight: LineHeight
}

// Spacing types
export type Spacing = {
  [key: string | number]: string
}

// Border radius types
export type BorderRadius = {
  [key: string]: string
}

// Shadow types
export type Shadows = {
  [key: string]: string
}

// Theme metadata
export type ThemeMetadata = {
  name: string
  description: string
  version: string
}

// Design tokens
export type DesignTokens = {
  colors: ColorScales
  semanticColors: SemanticColors
  gradients: Gradients
  hslValues: {
    [key: string]: string
  }
  borderRadius: BorderRadius
  typography: Typography
  spacing: Spacing
  shadows: Shadows
  metadata: ThemeMetadata
}

// Component tokens
export type ComponentTokens = {
  [component: string]: unknown
}
