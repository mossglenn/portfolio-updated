
// lib/themes/constructed-clarity.ts

// TypeScript interfaces for better type safety and documentation
export interface BrandColors {
  [key: string]: string | { [variant: string]: string };
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

// 1. Brand Colors with Variants
export const brandColors: BrandColors = {
  primary: {
    DEFAULT: "#d6a04f",     // base ochre
    hover: "#c9913f",       // 10% darker
    light: "#f0b861",       // 15% lighter
    dark: "#b07c39",        // 20% darker
    muted: "#d6a04f66",     // ~40% transparent
  },
  secondary: {
    DEFAULT: "#3a4a64",     // slate
    hover: "#445970",
    light: "#50627e",
    dark: "#2c3b52",
    muted: "#3a4a6480",
  },
  accent: {
    DEFAULT: "#99c2a2",     // pale sage
    hover: "#89b293",
    light: "#b7d3b7",
    dark: "#7ea78c",
    muted: "#99c2a280",
  },
  "soft-sand": {
    DEFAULT: "#f8f4ec",
    dark: "#eae3d6",
    muted: "#f8f4ecb3",
  },
  "foundation-black": {
    DEFAULT: "#121417",
    light: "#2a2d31",
    muted: "#12141780",
  },
};

// 2. HSL Theme Variables (for CSS variables)
export const themeVariables: ThemeVariables = {
  background: "43 50% 95%",           // #f8f4ec (Soft Sand)
  foreground: "220 10% 8%",           // #121417 (Foundation Black)
  card: "43 30% 90%",
  "card-foreground": "220 10% 8%",
  primary: "38 60% 57%",              // #d6a04f
  "primary-foreground": "220 10% 8%",
  secondary: "219 27% 31%",           // #3a4a64
  "secondary-foreground": "43 50% 95%",
  accent: "130 25% 68%",              // #99c2a2
  "accent-foreground": "220 10% 8%",
  muted: "43 20% 87%",                // #e5e1d9
  "muted-foreground": "219 27% 31%",
  border: "43 20% 80%",
  input: "43 20% 87%",
  ring: "38 60% 57%",
};

// 3. Gradients
export const gradients: Gradients = {
  ochre: "linear-gradient(to right, #d6a04f, #f0b861, #ffe3ac)",
  slate: "linear-gradient(to right, #3a4a64, #50627e, #8494ac)",
  sage: "linear-gradient(to right, #99c2a2, #b7d3b7, #d6e6cc)",
  "warm-dark": "linear-gradient(to right, #121417, #2a2f36, #3a4a64)",
  "light-wash": "linear-gradient(to right, #f8f4ec, #f1eadf, #e6dfd3)",
};

// 4. Export the complete theme
export const constructedClarityTheme: Theme = {
  brandColors,
  themeVariables,
  gradients,
  metadata: {
    name: "Constructed Clarity",
    description: "A thoughtful, crafted theme for learning designers who value clarity and depth.",
    version: "1.1.0",
  },
};
