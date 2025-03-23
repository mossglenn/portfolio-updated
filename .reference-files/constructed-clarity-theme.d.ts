
// types/constructed-clarity-theme.d.ts

export interface BrandColors {
  [key: string]: string;
}

export interface ThemeVariables {
  [key: string]: string;
}

export interface Gradients {
  [key: string]: string;
}

export interface ThemeMetadata {
  name: string;
  description: string;
  version: string;
}

export interface Theme {
  brandColors: BrandColors;
  themeVariables: ThemeVariables;
  gradients: Gradients;
  metadata?: ThemeMetadata;
}
