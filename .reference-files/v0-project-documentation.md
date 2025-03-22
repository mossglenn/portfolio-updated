# Project Documentation for v0

Generated: 3/22/2025, 5:45:42 PM

## Table of Contents

1. [Project Summary](#project-summary)
2. [Configuration Files](#configuration-files)
3. [Project Structure](#project-structure)
4. [Component Patterns](#component-patterns)
5. [Code Generation Guidelines](#code-generation-guidelines)

## Project Summary

### Project Information

- **Name**: instructional-design-portfolio
- **Version**: 0.1.0
- **Description**: No description provided
- **Private**: Yes

### Key Dependencies

#### Core

- **react**: 18.2.0
- **react-dom**: 18.2.0
- **next**: ^15.1.0

#### UI Libraries

- **@radix-ui/react-accordion**: ^1.2.2
- **@radix-ui/react-alert-dialog**: ^1.1.4
- **@radix-ui/react-aspect-ratio**: ^1.1.1
- **@radix-ui/react-avatar**: ^1.1.2
- **@radix-ui/react-checkbox**: ^1.1.3
- **@radix-ui/react-collapsible**: ^1.1.2
- **@radix-ui/react-context-menu**: ^2.2.4
- **@radix-ui/react-dialog**: ^1.1.4
- **@radix-ui/react-dropdown-menu**: ^2.1.4
- **@radix-ui/react-hover-card**: ^1.1.4
- **@radix-ui/react-label**: ^2.1.1
- **@radix-ui/react-menubar**: ^1.1.4
- **@radix-ui/react-navigation-menu**: ^1.2.3
- **@radix-ui/react-popover**: ^1.1.4
- **@radix-ui/react-progress**: ^1.1.1
- **@radix-ui/react-radio-group**: ^1.2.2
- **@radix-ui/react-scroll-area**: ^1.2.2
- **@radix-ui/react-select**: ^2.1.4
- **@radix-ui/react-separator**: ^1.1.1
- **@radix-ui/react-slider**: ^1.2.2
- **@radix-ui/react-slot**: ^1.1.1
- **@radix-ui/react-switch**: ^1.1.2
- **@radix-ui/react-tabs**: ^1.1.2
- **@radix-ui/react-toast**: ^1.2.4
- **@radix-ui/react-toggle**: ^1.1.1
- **@radix-ui/react-toggle-group**: ^1.1.1
- **@radix-ui/react-tooltip**: ^1.1.6
- **framer-motion**: ^10.16.4

#### State Management

- No dedicated state management library detected

### Development Environment

#### TypeScript Configuration

- **Target**: ES6
- **Module**: esnext
- **JSX**: preserve
- **Strict Mode**: Enabled
- **Path Aliases**:
  - `@/*` → `./*`
  - `@components/*` → `./components/*`
  - `@lib/*` → `./lib/*`
  - `@styles/*` → `./styles/*`

### Project Structure Summary

- **Next.js Router**: App Router
- **components**: Present
- **lib**: Present
- **hooks**: Present
- **styles**: Present
- **public**: Present


## Configuration Files

### package.json

```json
{
  "name": "instructional-design-portfolio",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "lint:fix": "eslint --fix .",
    "docs:structure": "find . -type f -not -path \"*/node_modules/*\" -not -path \"*/.git/*\" -not -path \"*/.next/*\" > .reference-files/project-structure.txt",
    "docs:gen": "mkdir -p .reference-files/docs && node scripts/generate-docs.js",
    "docs:project": "node scripts/document-project.js",
    "docs:v0": "node scripts/document-project-single.js"
  },
  "scriptDescriptions": {
    "docs:structure": "Generate a list of all files in the project (excluding node_modules and .git) and save it to .reference-files/project-structure.txt",
    "docs:gen": "Generate documentation for the project and save it to .reference-files/docs",
    "docs:project": "creates a comprehensive set of documentation in `.reference-files/project-docs/`for v0",
    "docs:v0": "creates a single compregensive file for v0"
  },
  "dependencies": {
    "@emotion/is-prop-valid": "^1.2.1",
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.4",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-hover-card": "^1.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-menubar": "^1.1.4",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-popover": "^1.1.4",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-scroll-area": "^1.2.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "3.0.0",
    "embla-carousel-react": "^8.5.2",
    "framer-motion": "^10.16.4",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.483.0",
    "next": "^15.1.0",
    "next-themes": "^0.4.6",
    "react": "18.2.0",
    "react-day-picker": "8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.1",
    "sonner": "^2.0.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.0.2",
    "@eslint/js": "^9.0.0",
    "@types/node": "^20.9.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^8.26.1",
    "@typescript-eslint/parser": "^8.26.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.1.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-tailwindcss": "^3.14.3",
    "globals": "^16.0.0",
    "playwright": "^1.51.1",
    "postcss": "^8.4.31",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^3.4.17",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.2.2"
  }
}

```

### tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["./components/*"],
      "@lib/*": ["./lib/*"],
      "@styles/*": ["./styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".reference-files/featured-projects.ts"],
  "exclude": ["node_modules"]
}

```

### tailwind.config.ts

```javascript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config


```

### next.config.mjs

```javascript
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig

```

### eslint.config.js

```javascript
// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: ['.reference-files/**', '.reference-files/']
  },
  js.configs.recommended,
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:tailwindcss/recommended',
    ],
    plugins: [
      'react',
      '@typescript-eslint',
      'import',
      'jsx-a11y',
      'tailwindcss',
    ],
  }),
  // Prettier plugin needs to be loaded separately in flat config
  prettierPlugin,
  // Prettier config needs to be loaded last to override other formatting rules
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/classnames-order': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['cn', 'cva'],
      },
    },
  },
];
```

### .eslintrc.js

```javascript
module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "tailwindcss",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/classnames-order": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  },
  settings: {
    react: {
      version: "detect"
    },
    tailwindcss: {
      callees: ["cn", "cva"]
    }
  }
};
```

### .prettierrc.js

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"]
};
```

## Project Structure

Total files: 142

### Directories

#### .

- .eslintrc.js
- .gitignore
- .prettierignore
- .prettierrc.js
- components.json
- eslint.config.js
- next-env.d.ts
- next.config.mjs
- package.json
- postcss.config.mjs
- tailwind.config.ts
- tsconfig.json

#### ./.reference-files

- color references
- constructed-clarity-theme.d.ts
- constructed-clarity-theme.ts
- home-page-content.md
- playground.tsx
- project-structure.txt
- v0-project-documentation.md
- venn_training_overlap.svg

#### ./.reference-files/portfolio_markdown_files

- adaptive-learning-data-driven.md
- adaptive-learning-instruction.md
- agile-genetics-education.md
- compliance-training-impact.md
- digital-literacy-microlearning.md
- game-based-learning-design.md
- gamified-statistics-tutor.md
- higher-ed-course-design.md
- research-collaboration-educators-industry.md
- research-impact-instructional-design.md
- scalable-stem-play.md
- sgm-training-scenario-based.md

#### ./.reference-files/project-docs

- compatibility-guidelines.md
- component-patterns.md
- configuration.md
- file-structure.md
- index.md
- project-summary.md

#### ./.reference-files/project-docs/components

- call-to-action-ee7bfdee.tsx
- contact-form-1a800515.tsx
- featured-projects-d4509630.tsx
- footer-8b216e7d.tsx
- header-852e5cc3.tsx
- layout-c14fc241.tsx
- page-95d6871b.tsx
- page-acdd547d.tsx
- page-b985b05e.tsx
- page-dfcde9f6.tsx

#### ./.reference-files/project-docs/configs

- .eslintrc.js
- .prettierrc.js
- eslint.config.js
- next.config.mjs
- package.json
- tailwind.config.ts
- tsconfig.json

#### ./app/about

- page.tsx

#### ./app/contact

- page.tsx

#### ./app

- globals.css
- layout.tsx
- page.tsx

#### ./app/playground

- page.tsx

#### ./app/portfolio

- page.tsx

#### ./components

- call-to-action.tsx
- contact-form.tsx
- featured-projects.tsx
- footer.tsx
- header.tsx
- hero.tsx
- markdown-content.tsx
- portfolio-categories.tsx
- portfolio-grid.tsx
- portfolio-nav.tsx
- project-layout.tsx
- skills.tsx
- theme-provider.tsx
- theme-toggle.tsx

#### ./components/ui

- accordion.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- input.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toast.tsx
- toaster.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.tsx
- use-toast.ts

#### ./data

- projects.ts

#### ./hooks

- use-mobile.tsx
- use-toast.ts

#### ./lib

- utils.ts

#### ./public

- placeholder-user.jpg
- placeholder.jpg
- placeholder.svg

#### ./scripts

- document-project-single.js
- document-project.js

#### ./styles

- globals.css

### Files by Extension

#### .js (8 files)

<details>
<summary>Show files</summary>

- ./.eslintrc.js
- ./.prettierrc.js
- ./.reference-files/project-docs/configs/.eslintrc.js
- ./.reference-files/project-docs/configs/.prettierrc.js
- ./.reference-files/project-docs/configs/eslint.config.js
- ./eslint.config.js
- ./scripts/document-project-single.js
- ./scripts/document-project.js

</details>

#### .ts (9 files)

<details>
<summary>Show files</summary>

- ./.reference-files/constructed-clarity-theme.d.ts
- ./.reference-files/constructed-clarity-theme.ts
- ./.reference-files/project-docs/configs/tailwind.config.ts
- ./components/ui/use-toast.ts
- ./data/projects.ts
- ./hooks/use-toast.ts
- ./lib/utils.ts
- ./next-env.d.ts
- ./tailwind.config.ts

</details>

#### .md (20 files)

<details>
<summary>Show files</summary>

- ./.reference-files/home-page-content.md
- ./.reference-files/portfolio_markdown_files/adaptive-learning-data-driven.md
- ./.reference-files/portfolio_markdown_files/adaptive-learning-instruction.md
- ./.reference-files/portfolio_markdown_files/agile-genetics-education.md
- ./.reference-files/portfolio_markdown_files/compliance-training-impact.md
- ./.reference-files/portfolio_markdown_files/digital-literacy-microlearning.md
- ./.reference-files/portfolio_markdown_files/game-based-learning-design.md
- ./.reference-files/portfolio_markdown_files/gamified-statistics-tutor.md
- ./.reference-files/portfolio_markdown_files/higher-ed-course-design.md
- ./.reference-files/portfolio_markdown_files/research-collaboration-educators-industry.md
- ./.reference-files/portfolio_markdown_files/research-impact-instructional-design.md
- ./.reference-files/portfolio_markdown_files/scalable-stem-play.md
- ./.reference-files/portfolio_markdown_files/sgm-training-scenario-based.md
- ./.reference-files/project-docs/compatibility-guidelines.md
- ./.reference-files/project-docs/component-patterns.md
- ./.reference-files/project-docs/configuration.md
- ./.reference-files/project-docs/file-structure.md
- ./.reference-files/project-docs/index.md
- ./.reference-files/project-docs/project-summary.md
- ./.reference-files/v0-project-documentation.md

</details>

#### .tsx (79 files)

<details>
<summary>Show files</summary>

- ./.reference-files/playground.tsx
- ./.reference-files/project-docs/components/call-to-action-ee7bfdee.tsx
- ./.reference-files/project-docs/components/contact-form-1a800515.tsx
- ./.reference-files/project-docs/components/featured-projects-d4509630.tsx
- ./.reference-files/project-docs/components/footer-8b216e7d.tsx
- ./.reference-files/project-docs/components/header-852e5cc3.tsx
- ./.reference-files/project-docs/components/layout-c14fc241.tsx
- ./.reference-files/project-docs/components/page-95d6871b.tsx
- ./.reference-files/project-docs/components/page-acdd547d.tsx
- ./.reference-files/project-docs/components/page-b985b05e.tsx
- ./.reference-files/project-docs/components/page-dfcde9f6.tsx
- ./app/about/page.tsx
- ./app/contact/page.tsx
- ./app/layout.tsx
- ./app/page.tsx
- ./app/playground/page.tsx
- ./app/portfolio/page.tsx
- ./components/call-to-action.tsx
- ./components/contact-form.tsx
- ./components/featured-projects.tsx
- ./components/footer.tsx
- ./components/header.tsx
- ./components/hero.tsx
- ./components/markdown-content.tsx
- ./components/portfolio-categories.tsx
- ./components/portfolio-grid.tsx
- ./components/portfolio-nav.tsx
- ./components/project-layout.tsx
- ./components/skills.tsx
- ./components/theme-provider.tsx
- ./components/theme-toggle.tsx
- ./components/ui/accordion.tsx
- ./components/ui/alert.tsx
- ./components/ui/aspect-ratio.tsx
- ./components/ui/avatar.tsx
- ./components/ui/badge.tsx
- ./components/ui/breadcrumb.tsx
- ./components/ui/button.tsx
- ./components/ui/calendar.tsx
- ./components/ui/card.tsx
- ./components/ui/carousel.tsx
- ./components/ui/chart.tsx
- ./components/ui/checkbox.tsx
- ./components/ui/collapsible.tsx
- ./components/ui/command.tsx
- ./components/ui/context-menu.tsx
- ./components/ui/drawer.tsx
- ./components/ui/dropdown-menu.tsx
- ./components/ui/form.tsx
- ./components/ui/hover-card.tsx
- ./components/ui/input-otp.tsx
- ./components/ui/input.tsx
- ./components/ui/label.tsx
- ./components/ui/menubar.tsx
- ./components/ui/navigation-menu.tsx
- ./components/ui/pagination.tsx
- ./components/ui/popover.tsx
- ./components/ui/progress.tsx
- ./components/ui/radio-group.tsx
- ./components/ui/resizable.tsx
- ./components/ui/scroll-area.tsx
- ./components/ui/select.tsx
- ./components/ui/separator.tsx
- ./components/ui/sheet.tsx
- ./components/ui/sidebar.tsx
- ./components/ui/skeleton.tsx
- ./components/ui/slider.tsx
- ./components/ui/sonner.tsx
- ./components/ui/switch.tsx
- ./components/ui/table.tsx
- ./components/ui/tabs.tsx
- ./components/ui/textarea.tsx
- ./components/ui/toast.tsx
- ./components/ui/toaster.tsx
- ./components/ui/toggle-group.tsx
- ./components/ui/toggle.tsx
- ./components/ui/tooltip.tsx
- ./components/ui/use-mobile.tsx
- ./hooks/use-mobile.tsx

</details>

#### .mjs (3 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-docs/configs/next.config.mjs
- ./next.config.mjs
- ./postcss.config.mjs

</details>

#### .json (5 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-docs/configs/package.json
- ./.reference-files/project-docs/configs/tsconfig.json
- ./components.json
- ./package.json
- ./tsconfig.json

</details>

#### .txt (1 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-structure.txt

</details>

#### .svg (2 files)

<details>
<summary>Show files</summary>

- ./.reference-files/venn_training_overlap.svg
- ./public/placeholder.svg

</details>

#### .css (2 files)

<details>
<summary>Show files</summary>

- ./app/globals.css
- ./styles/globals.css

</details>

#### .jpg (2 files)

<details>
<summary>Show files</summary>

- ./public/placeholder-user.jpg
- ./public/placeholder.jpg

</details>

## Component Patterns

This section contains 5 representative components from your project.

### ./.reference-files/playground.tsx

```tsx

// app/playground/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PlaygroundPage() {
  return (
    <main className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">UI Component Playground</h1>

      {/* Buttons */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Example Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a simple card using your current theme tokens and styling.</p>
          </CardContent>
        </Card>
      </section>

      {/* Form Inputs */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Form Elements</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input placeholder="Example input" />
          <Switch id="example-switch" />
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>This is the content for tab one.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>This is the content for tab two.</p>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

```

#### Analysis

- **Type**: Client Component
- **Imports**: 5 dependencies
  - @/components/ui/button
  - @/components/ui/card
  - @/components/ui/input
  - @/components/ui/switch
  - @/components/ui/tabs
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

### ./.reference-files/project-docs/components/call-to-action-ee7bfdee.tsx

```tsx
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg bg-primary text-primary-foreground p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Collaborate?</h2>
            <p className="text-lg md:text-xl max-w-2xl">
              Let's discuss how we can create innovative learning solutions that drive real impact for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white/10 px-8"
              >
                <Link href="/portfolio">Explore Portfolio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


```

#### Analysis

- **Type**: Client Component
- **Imports**: 3 dependencies
  - @/components/ui/button
  - next/link
  - framer-motion
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

### ./.reference-files/project-docs/components/contact-form-1a800515.tsx

```tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)

    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}


```

#### Analysis

- **Type**: Client Component
- **Imports**: 6 dependencies
  - react
  - @/components/ui/button
  - @/components/ui/input
  - @/components/ui/label
  - @/components/ui/textarea
  - @/components/ui/use-toast
- **Props Interface**: No
- **Hooks Used**: useState
- **Styling**: Tailwind/CSS Classes

### ./.reference-files/project-docs/components/featured-projects-d4509630.tsx

```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Get featured projects
  const projects = getFeaturedProjects(3)

  // Update the filteredProjects logic:
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  // Update the filters array:
  const filters = ["All", ...projects.flatMap((p) => p.tags).filter((tag, index, self) => self.indexOf(tag) === index)]

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore my portfolio of innovative instructional design solutions that solve real learning challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.label}</CardTitle>
                  <CardDescription>{project.subLabel}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between">
                    <Link href={project.path}>
                      View Case Study
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


```

#### Analysis

- **Type**: Client Component
- **Imports**: 9 dependencies
  - react
  - next/link
  - next/image
  - framer-motion
  - @/components/ui/badge
  - @/components/ui/button
  - @/components/ui/card
  - lucide-react
  - @/data/projects
- **Props Interface**: No
- **Hooks Used**: useState
- **Styling**: Tailwind/CSS Classes

### ./.reference-files/project-docs/components/footer-8b216e7d.tsx

```tsx
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ID Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Innovative instructional design solutions that bridge research, learning science, and real-world
              application.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ID Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


```

#### Analysis

- **Type**: Function Component
- **Imports**: 2 dependencies
  - next/link
  - lucide-react
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## Code Generation Guidelines

This section provides guidelines for generating code that is compatible with this project.

### React Compatibility

- **React Version**: 18.2.0
- Use React 18 features like automatic batching and concurrent rendering
- Can use hooks like useId(), useSyncExternalStore(), useInsertionEffect()
- Use Suspense for data fetching when appropriate

### Next.js Compatibility

- **Next.js Version**: ^15.1.0

### TypeScript Compatibility

- **TypeScript Version**: ^5.2.2
- Use explicit type annotations for function parameters and return types
- Define interfaces for component props
- Use type imports: `import type { X } from 'y'`

### UI Component Patterns

- No specific UI library detected, follow the project's existing styling patterns

### File Naming Conventions

- Use kebab-case for file names (e.g., `button-group.tsx`)

### Code Formatting

- Project uses Prettier for code formatting
- Don't use semicolons at the end of statements
- Use single quotes for strings
- Keep lines under 100 characters
