# Project Documentation for v0

Generated: 4/10/2025, 11:19:09 PM

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

- **@radix-ui/react-accordion**: ^1.2.4
- **@radix-ui/react-alert-dialog**: ^1.1.4
- **@radix-ui/react-aspect-ratio**: ^1.1.2
- **@radix-ui/react-avatar**: ^1.1.2
- **@radix-ui/react-checkbox**: ^1.1.3
- **@radix-ui/react-collapsible**: ^1.1.2
- **@radix-ui/react-context-menu**: ^2.2.4
- **@radix-ui/react-dialog**: ^1.1.6
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
- **@radix-ui/react-slot**: ^1.1.2
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

- **Target**: ES2020
- **Module**: esnext
- **JSX**: preserve
- **Strict Mode**: Enabled
- **Path Aliases**:
  - `@/*` → `./*`
  - `@components/*` → `./components/*`
  - `@lib/*` → `./lib/*`
  - `@styles/*` → `./styles/*`
  - `@types/*` → `./types/*`
  - `@data/*` → `./data/*`
  - `@theme/*` → `./styles/theme/*`

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
    "docs:v0": "node scripts/document-project-single.js",
    "knip": "knip",
    "add:component": "npx shadcn@2.3.0 add",
    "generate:colors": "python3 scripts/generate-color-reference.py"
  },
  "scriptDescriptions": {
    "docs:structure": "Generate a list of all files in the project (excluding node_modules and .git) and save it to .reference-files/project-structure.txt",
    "docs:gen": "Generate documentation for the project and save it to .reference-files/docs",
    "docs:project": "creates a comprehensive set of documentation in `.reference-files/project-docs/`for v0",
    "docs:v0": "creates a single compregensive file for v0",
    "add": "follow the command with the name of a shadcn/ui component to add it to the project",
    "generate:colors": "generate a new color reference file based on current :root variables"
  },
  "dependencies": {
    "@emotion/is-prop-valid": "^1.2.1",
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-aspect-ratio": "^1.1.2",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.4",
    "@radix-ui/react-dialog": "^1.1.6",
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
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.6",
    "@tailwindcss/postcss": "^4.1.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "3.0.0",
    "embla-carousel-react": "^8.5.2",
    "execa": "^9.5.2",
    "framer-motion": "^10.16.4",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.483.0",
    "next": "^15.1.0",
    "react": "18.2.0",
    "react-day-picker": "8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.1",
    "sonner": "^2.0.1",
    "tailwind-merge": "^2.6.0",
    "tailwind-variants": "^1.0.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.0.2",
    "@eslint/js": "^9.0.0",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/container-queries": "^0.1.1",
    "@types/node": "^20.17.24",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^8.26.1",
    "@typescript-eslint/parser": "^8.26.1",
    "autoprefixer": "^10.4.21",
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
    "knip": "^5.46.0",
    "playwright": "^1.51.1",
    "postcss": "^8.4.31",
    "postcss-load-config": "^6.0.1",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^3.4.17",
    "ts-node": "^10.9.2",
    "ts-prune": "^0.10.3",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.8.3"
  }
}

```

### tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES2020",
    "skipLibCheck": true,
    "strict": true,
    "alwaysStrict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
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
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["./components/*"],
      "@lib/*": ["./lib/*"],
      "@styles/*": ["./styles/*"],
      "@types/*": ["./types/*"],
      "@data/*": ["./data/*"],
      "@theme/*": ["./styles/theme/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".reference-files/**/*.ts",
    "types",
    ".reference-files/playground-page-old.tsx",
    "next.config.mjs",
    ".eslint/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```

### tailwind.config.ts

```javascript
import containerQueries from '@tailwindcss/container-queries'
import { fontFamily } from 'tailwindcss/defaultTheme'
import animate from 'tailwindcss-animate'

import { themeBackgroundImages } from './styles/theme/tailwind/backgrounds'
import { themeColors } from './styles/theme/tailwind/colors'

import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      listStyleImage: {
        cross: 'url("/icons/cross.png")',
        commit: 'url("/icons/commit-bullet.svg")',
        'key-foreground': 'url("/icons/key-foreground.svg")',
        'key-solid-foreground': 'url("/icons/key-foreground-left-large.svg")',
        'gem-lavender': 'url("/icons/gem-lavender.svg")',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        display: ['Gimlet Sans Variable"', ...fontFamily.sans],
      },
      colors: themeColors,
      backgroundImage: themeBackgroundImages,
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-out-from-left': {
          '0%': {
            transform: 'translateX(-10rem)',
            opacity: '0',
            visibility: 'hidden',
          },
          '1%': {
            visibility: 'visible',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-out-to-left': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            visibility: 'hidden',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out both',
        'slide-out-from-left': 'slide-out-from-left 600ms ease-out forwards',
        'slide-out-to-left': 'slide-out-to-left 0.4s ease-out forwards',
      },
      skew: {
        '20': '20deg',
        '-20': '-20deg',
      },
    },
  },
  plugins: [animate, containerQueries],
} satisfies Config

export default config

```

### next.config.mjs

```javascript
// @ts-check

/**
 * @type {import('next').NextConfig}
 */
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

export default nextConfig

```

### eslint.config.js

```javascript
// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/out/**',
      '**/.reference-files/**',
      '/.reference-files/**',
      '**/learning-objects/**',
      '**/scripts/**',
    ],
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
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'tailwindcss'],
  }),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'react/self-closing-comp': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['cn', 'cva'],
        whitelist: ['gradient-text-*'], // Allow custom classnames
      },
    },
  },
]

export default eslintConfig

```

## Project Structure

Total files: 576

### Directories

#### .

- .gitignore
- .prettierignore
- color-reference.html
- components.json
- eslint.config.js
- knip.json
- next-env.d.ts
- next.config.mjs
- out.css
- package.json
- postcss.config.cjs
- prettier.config.js
- tailwind.config.ts
- tsconfig.json

#### ./.reference-files

- color-reference.html
- constructed-clarity-theme.d.ts
- constructed-clarity-theme.ts
- globals_BACKUP.css
- globals_old.css
- globals-backup.css
- home-page-content.md
- new-theme-colors.ts
- playground-page-old.tsx
- playground.tsx
- portfolio_markdown_files.zip
- root-css-variables-OLD.css
- shadcn-defaults.css
- spotlight-wide-code.txt
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
- preview-statistic-tutor.md
- quotes.md
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

#### ./.reference-files/unused-files/components

- call-to-action.tsx
- featured-projects.tsx
- hero.tsx
- markdown-content.tsx
- portfolio-categories.tsx
- portfolio-grid.tsx
- portfolio-nav.tsx
- project-layout.tsx
- skills.tsx
- theme-toggle.tsx

#### ./.reference-files/unused-files/components/ui

- accordion.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- breadcrumb.tsx
- calendar.tsx
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
- menubar.tsx
- navigation-menu.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- sheet.tsx
- skeleton.tsx
- slider.tsx
- table.tsx
- toaster.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.tsx

#### ./.vscode

- extensions.json
- launch.json
- settings.json
- snippets.code-snippets

#### ./app/about

- page.tsx

#### ./app/about/testamonials

- page.tsx

#### ./app/contact

- page.tsx

#### ./app

- globals.css
- layout.tsx
- page.tsx

#### ./app/playground

- page.tsx

#### ./app/portfolio/gamified-adaptive-statistics-tutor

- page.tsx

#### ./app/portfolio

- page.tsx

#### ./components/common

- gradient-text.tsx

#### ./components

- contact-form.tsx

#### ./components/layout

- container.tsx
- footer.tsx
- navigation-desktop.tsx
- navigation-mobile.tsx
- navigation.tsx
- page-layout.tsx
- section.tsx

#### ./components/sections/home

- cta-section.tsx
- expertise-section.tsx
- featured-projects.tsx
- hero-section.tsx
- hero-test.tsx
- main-content-section.tsx
- project-one.tsx
- project-test.tsx
- rotating-quote-section.tsx
- toolstack-section.tsx

#### ./components/ui

- accordion.tsx
- aspect-ratio.tsx
- badge.tsx
- button-icon.tsx
- button.tsx
- card.tsx
- iceberg-svg.tsx
- input.tsx
- label.tsx
- logo-badge.tsx
- separator.tsx
- sheet.tsx
- skew-tag.tsx
- skewed-box-container.tsx
- skewed-box.tsx
- skewed-button.tsx
- skewed-nav-link.tsx
- speech-bubble.tsx
- spotlight-background.tsx
- switch.tsx
- tabs.tsx
- textarea.tsx
- toast.tsx
- use-toast.ts

#### ./config

- site.ts

#### ./data

- projects.ts
- testamonials.ts

#### ./hooks

- use-debounce.ts
- use-local-storage.ts
- use-media-query.ts
- use-mobile.tsx
- use-mounted.ts
- use-scroll.ts
- use-skew-offset.ts
- use-toast.ts

#### ./lib

- utils.ts

#### ./public/fonts

- Gimlet_Sans_Variable_Regular.otf

#### ./public/icons

- commit-bullet.svg
- cross.svg
- gem-lavender.svg
- key-foreground-left-large.svg
- key-foreground.svg
- key-solid-foreground-left.svg
- key-solid-foreground.svg
- trophy-filled.svg

#### ./public

- key-foreground-left-large.svg
- placeholder-user.jpg
- placeholder.jpg
- placeholder.svg
- spotlight.svg

#### ./public/learning-objects/escape-room-learning-activity

- adlcp_rootv1p2.xsd
- browsersniff.js
- goodbye.html
- ims_xml.xsd
- imscp_rootv1p1p2.xsd
- imsmanifest.xml
- imsmd_rootv1p2p1.xsd
- index_scorm.html
- metadata.xml
- project.txt
- SCORM_utilities.js
- scormdriver.js
- ScormEnginePackageProperties.xsd
- Utilities.js

#### ./public/learning-objects/escape-room-learning-activity/ar

- 12633.mp3
- 15812.mp3
- 15839.mp3
- 166512.mp3
- Mouse.mp3

#### ./public/learning-objects/escape-room-learning-activity/assets/css

- CPLibraryAll.css

#### ./public/learning-objects/escape-room-learning-activity/assets/css/start/images

- animated-overlay.gif
- ui-bg_flat_55_999999_40x100.png
- ui-bg_flat_75_aaaaaa_40x100.png
- ui-bg_glass_45_0078ae_1x400.png
- ui-bg_glass_55_f8da4e_1x400.png
- ui-bg_glass_75_79c9ec_1x400.png
- ui-bg_gloss-wave_45_e14f1c_500x100.png
- ui-bg_gloss-wave_50_6eac2c_500x100.png
- ui-bg_gloss-wave_75_2191c0_500x100.png
- ui-bg_inset-hard_100_fcfdfd_1x100.png
- ui-icons_0078ae_256x240.png
- ui-icons_056b93_256x240.png
- ui-icons_d8e7f3_256x240.png
- ui-icons_e0fdff_256x240.png
- ui-icons_f5e175_256x240.png
- ui-icons_f7a50d_256x240.png
- ui-icons_fcd113_256x240.png

#### ./public/learning-objects/escape-room-learning-activity/assets/css/start

- jquery-ui-1.11.4.custom.css
- jquery-ui-1.11.4.custom.min.css

#### ./public/learning-objects/escape-room-learning-activity/assets/htmlimages

- arrow_right.gif
- ccClose.png
- checkBox_disabled.png
- checkBox_normal.png
- checkBox_selected.png
- checkBox_selectedDisabled.png
- closeReviewButton.png
- correct_answer_normal.png
- correct_answer_small.png
- correct_question_normal.png
- correct_question_small.png
- dd_arrow.png
- expand_icon.png
- expand_icon@2x.png
- gesturemobileicon.png
- gesturemobileicon@2x.png
- gesturemobileimage2.png
- gesturemobilelandscape.png
- gesturetabletimage.png
- hotspot_correct_answer_normal.png
- hotspot_incorrect_answer_normal.png
- hotspot.gif
- img_trans.gif
- incorrect_answer_normal.png
- incorrect_answer_small.png
- incorrect_question_normal.png
- incorrect_question_small.png
- loader_transparent.gif
- loader.gif
- movieexpire.png
- partial_correct_question_normal.png
- partial_correct_question_small.png
- Pause.gif
- Pause2x.gif
- placeholder.png
- Play_icon.png
- Play.gif
- Play2x.gif
- radioButton_disabled.png
- radioButton_normal.png
- radioButton_selected.png
- radioButton_selectedDisabled.png
- sequenceReview.png
- skip_answer_normal.png
- skip_answer_small.png
- skip_question_normal.png
- skip_question_small.png
- toc.png
- vidbg.png
- vidfullscreen.png
- vidpause.png
- vidplay.png
- vidrewind.png
- vidslider.png
- vidstop.png
- vidvolume.png
- vidvolume2.png
- vidvolumemute.png

#### ./public/learning-objects/escape-room-learning-activity/assets/js

- CPM.js
- CPXHRLoader.js
- jquery-1.11.3.min.js

#### ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons

- AudioOff.png
- AudioOn.png
- BackGround.png
- Backward.png
- CC.png
- Color.png
- ColorSmall.png
- Exit.png
- FastForward.png
- FastForward1.png
- FastForward2.png
- Forward.png
- Glow.png
- GlowSmall.png
- Height.png
- InnerStroke.png
- InnerStrokeSmall.png
- Pause.png
- Play.png
- Progress.png
- Rewind.png
- Shade.png
- ShadeSmall.png
- Stroke.png
- StrokeSmall.png
- Thumb.png
- ThumbBase.png
- TOC.png

#### ./public/learning-objects/escape-room-learning-activity/assets/playbar

- playbarScript.js

#### ./public/learning-objects/escape-room-learning-activity/assets/TOC_icons

- collapseIcon.png
- expandIcon.png
- photo.png

#### ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons

- blankBookmark.png
- clear.png
- expander.png
- fullBookmark.png
- go.png
- infoClose.png
- moreinfo.png
- searchBtnNormal.png
- searchBtnSelect.png
- visited.png

#### ./public/learning-objects/escape-room-learning-activity/dr

- img1.json
- img2.json
- img3.json
- img4.json
- img5.json
- img6.json
- imgmd.json
- loading.gif

#### ./public/learning-objects/stats-zoo-learning-activity/ar

- 47974.mp3
- Mouse.mp3

#### ./public/learning-objects/stats-zoo-learning-activity/assets/css

- CPLibraryAll.css

#### ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images

- animated-overlay.gif
- ui-bg_flat_55_999999_40x100.png
- ui-bg_flat_75_aaaaaa_40x100.png
- ui-bg_glass_45_0078ae_1x400.png
- ui-bg_glass_55_f8da4e_1x400.png
- ui-bg_glass_75_79c9ec_1x400.png
- ui-bg_gloss-wave_45_e14f1c_500x100.png
- ui-bg_gloss-wave_50_6eac2c_500x100.png
- ui-bg_gloss-wave_75_2191c0_500x100.png
- ui-bg_inset-hard_100_fcfdfd_1x100.png
- ui-icons_0078ae_256x240.png
- ui-icons_056b93_256x240.png
- ui-icons_d8e7f3_256x240.png
- ui-icons_e0fdff_256x240.png
- ui-icons_f5e175_256x240.png
- ui-icons_f7a50d_256x240.png
- ui-icons_fcd113_256x240.png

#### ./public/learning-objects/stats-zoo-learning-activity/assets/css/start

- jquery-ui-1.11.4.custom.css
- jquery-ui-1.11.4.custom.min.css

#### ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages

- arrow_right.gif
- ccClose.png
- checkBox_disabled.png
- checkBox_normal.png
- checkBox_selected.png
- checkBox_selectedDisabled.png
- closeReviewButton.png
- correct_answer_normal.png
- correct_answer_small.png
- correct_question_normal.png
- correct_question_small.png
- dd_arrow.png
- expand_icon.png
- expand_icon@2x.png
- gesturemobileicon.png
- gesturemobileicon@2x.png
- gesturemobileimage2.png
- gesturemobilelandscape.png
- gesturetabletimage.png
- hotspot_correct_answer_normal.png
- hotspot_incorrect_answer_normal.png
- hotspot.gif
- img_trans.gif
- incorrect_answer_normal.png
- incorrect_answer_small.png
- incorrect_question_normal.png
- incorrect_question_small.png
- loader_transparent.gif
- loader.gif
- movieexpire.png
- partial_correct_question_normal.png
- partial_correct_question_small.png
- Pause.gif
- Pause2x.gif
- placeholder.png
- Play_icon.png
- Play.gif
- Play2x.gif
- radioButton_disabled.png
- radioButton_normal.png
- radioButton_selected.png
- radioButton_selectedDisabled.png
- sequenceReview.png
- skip_answer_normal.png
- skip_answer_small.png
- skip_question_normal.png
- skip_question_small.png
- toc.png
- vidbg.png
- vidfullscreen.png
- vidpause.png
- vidplay.png
- vidrewind.png
- vidslider.png
- vidstop.png
- vidvolume.png
- vidvolume2.png
- vidvolumemute.png

#### ./public/learning-objects/stats-zoo-learning-activity/assets/js

- CPM.js
- CPXHRLoader.js
- jquery-1.11.3.min.js

#### ./public/learning-objects/stats-zoo-learning-activity/assets/TOC_icons

- collapseIcon.png
- expandIcon.png
- photo.png

#### ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons

- blankBookmark.png
- clear.png
- expander.png
- fullBookmark.png
- go.png
- infoClose.png
- moreinfo.png
- searchBtnNormal.png
- searchBtnSelect.png
- visited.png

#### ./public/learning-objects/stats-zoo-learning-activity/dr

- img1.json
- img10.json
- img11.json
- img12.json
- img13.json
- img14.json
- img15.json
- img16.json
- img17.json
- img18.json
- img19.json
- img2.json
- img20.json
- img21.json
- img22.json
- img23.json
- img24.json
- img25.json
- img26.json
- img27.json
- img28.json
- img29.json
- img3.json
- img4.json
- img5.json
- img6.json
- img7.json
- img8.json
- img9.json
- imgmd.json
- loading.gif

#### ./public/learning-objects/stats-zoo-learning-activity

- goodbye.html
- index.html
- project.txt

#### ./public/portfolio-images

- adaptive-statistics-tutor.png
- escape-room-preview-optimized.gif
- escape-room-preview-reoptimized.gif
- escape-room-preview.gif

#### ./public/portfolio-images/game-based-learning-design

- Balance-Scale-Levels-v5-WITH-INQUIRY.pptx
- Beanstalk Videos – ETC s Darpa Engage 2.png
- Beanstalk Videos – ETC s Darpa Engage 3.png
- Beanstalk Videos – ETC s Darpa Engage.png
- beanstalkfeature.png
- BiostaticiansTreasure.mp4
- BIOSTATSfEATURE.png
- ENGAGE poster border.png
- ENGAGE-poster-20120912-1.png
- ENGAGE-poster-20120912.pdf
- gamedesignttm_feature.png
- INQ-Item-by-item-slides.pdf
- interactiveproblemset_dragging_cropped.png
- Mt.-Lebanon-School-District-Markham-Elementary-4th-Grade-Patti-McAuley.pdf
- Mt.-Lebanon-School-District-Markham-Elementary-4th-Grade-Patti-McAuley.png
- Projects – ETC s Darpa Engage 2.png
- Projects – ETC s Darpa Engage 3.png
- Projects – ETC s Darpa Engage 4.png
- Projects – ETC s Darpa Engage.png
- Slide10.jpg
- tt,14.png
- tt14.png
- ttm1.png
- ttm10.png
- ttm11.png
- ttm12.png
- ttm15.png
- ttm2.png
- ttm3.png
- ttm5.png
- ttm6.png
- ttm7.png
- ttm8.png
- ttm9.png

#### ./public/portfolio-images/gamified-statistics-tutor

- Biostatistics Inference Instructional analysis.xlsx
- Course  Applied Biostatistics.png
- Escape Room Feedback.pptx
- Escape Room Tutor Instructions.png
- escape-room-statistic-tutor-hint.png
- escaperoom.PNG
- EscapeRoomComments-1.mp4
- escaperoomfeature-1024x1024.png
- escaperoomfeature.png
- interactive_1.PNG
- interactive_2.PNG
- interactive_3.PNG
- interactive_4.PNG
- interactive_5.PNG
- interactive_6.PNG
- interactive_7.PNG
- interactive_8.PNG
- interactiveproblemset_dragging_cropped.png
- interactiveproblemset_dragging.PNG
- learning-path.svg
- magic-book-brand-light.png
- treasure_feature.png
- treasureCover.PNG

#### ./scripts

- document-project-single.js
- document-project.js
- generate-color-reference.py
- move-unused-files.ts

#### ./styles/theme

- color-tokens.css
- gradient-tokens.css

#### ./styles/theme/tailwind

- backgrounds.ts
- colors.ts

#### ./types

- components.ts
- design.ts

### Files by Extension

#### .html (6 files)

<details>
<summary>Show files</summary>

- ./.reference-files/color-reference.html
- ./color-reference.html
- ./public/learning-objects/escape-room-learning-activity/goodbye.html
- ./public/learning-objects/escape-room-learning-activity/index_scorm.html
- ./public/learning-objects/stats-zoo-learning-activity/goodbye.html
- ./public/learning-objects/stats-zoo-learning-activity/index.html

</details>

#### .ts (23 files)

<details>
<summary>Show files</summary>

- ./.reference-files/constructed-clarity-theme.d.ts
- ./.reference-files/constructed-clarity-theme.ts
- ./.reference-files/new-theme-colors.ts
- ./.reference-files/project-docs/configs/tailwind.config.ts
- ./components/ui/use-toast.ts
- ./config/site.ts
- ./data/projects.ts
- ./data/testamonials.ts
- ./hooks/use-debounce.ts
- ./hooks/use-local-storage.ts
- ./hooks/use-media-query.ts
- ./hooks/use-mounted.ts
- ./hooks/use-scroll.ts
- ./hooks/use-skew-offset.ts
- ./hooks/use-toast.ts
- ./lib/utils.ts
- ./next-env.d.ts
- ./scripts/move-unused-files.ts
- ./styles/theme/tailwind/backgrounds.ts
- ./styles/theme/tailwind/colors.ts
- ./tailwind.config.ts
- ./types/components.ts
- ./types/design.ts

</details>

#### .css (15 files)

<details>
<summary>Show files</summary>

- ./.reference-files/globals_BACKUP.css
- ./.reference-files/globals_old.css
- ./.reference-files/globals-backup.css
- ./.reference-files/root-css-variables-OLD.css
- ./.reference-files/shadcn-defaults.css
- ./app/globals.css
- ./out.css
- ./public/learning-objects/escape-room-learning-activity/assets/css/CPLibraryAll.css
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/jquery-ui-1.11.4.custom.css
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/jquery-ui-1.11.4.custom.min.css
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/CPLibraryAll.css
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/jquery-ui-1.11.4.custom.css
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/jquery-ui-1.11.4.custom.min.css
- ./styles/theme/color-tokens.css
- ./styles/theme/gradient-tokens.css

</details>

#### .md (22 files)

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
- ./.reference-files/portfolio_markdown_files/preview-statistic-tutor.md
- ./.reference-files/portfolio_markdown_files/quotes.md
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

#### .tsx (107 files)

<details>
<summary>Show files</summary>

- ./.reference-files/playground-page-old.tsx
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
- ./.reference-files/unused-files/components/call-to-action.tsx
- ./.reference-files/unused-files/components/featured-projects.tsx
- ./.reference-files/unused-files/components/hero.tsx
- ./.reference-files/unused-files/components/markdown-content.tsx
- ./.reference-files/unused-files/components/portfolio-categories.tsx
- ./.reference-files/unused-files/components/portfolio-grid.tsx
- ./.reference-files/unused-files/components/portfolio-nav.tsx
- ./.reference-files/unused-files/components/project-layout.tsx
- ./.reference-files/unused-files/components/skills.tsx
- ./.reference-files/unused-files/components/theme-toggle.tsx
- ./.reference-files/unused-files/components/ui/accordion.tsx
- ./.reference-files/unused-files/components/ui/alert.tsx
- ./.reference-files/unused-files/components/ui/aspect-ratio.tsx
- ./.reference-files/unused-files/components/ui/avatar.tsx
- ./.reference-files/unused-files/components/ui/breadcrumb.tsx
- ./.reference-files/unused-files/components/ui/calendar.tsx
- ./.reference-files/unused-files/components/ui/carousel.tsx
- ./.reference-files/unused-files/components/ui/chart.tsx
- ./.reference-files/unused-files/components/ui/checkbox.tsx
- ./.reference-files/unused-files/components/ui/collapsible.tsx
- ./.reference-files/unused-files/components/ui/command.tsx
- ./.reference-files/unused-files/components/ui/context-menu.tsx
- ./.reference-files/unused-files/components/ui/drawer.tsx
- ./.reference-files/unused-files/components/ui/dropdown-menu.tsx
- ./.reference-files/unused-files/components/ui/form.tsx
- ./.reference-files/unused-files/components/ui/hover-card.tsx
- ./.reference-files/unused-files/components/ui/input-otp.tsx
- ./.reference-files/unused-files/components/ui/menubar.tsx
- ./.reference-files/unused-files/components/ui/navigation-menu.tsx
- ./.reference-files/unused-files/components/ui/popover.tsx
- ./.reference-files/unused-files/components/ui/progress.tsx
- ./.reference-files/unused-files/components/ui/radio-group.tsx
- ./.reference-files/unused-files/components/ui/resizable.tsx
- ./.reference-files/unused-files/components/ui/scroll-area.tsx
- ./.reference-files/unused-files/components/ui/select.tsx
- ./.reference-files/unused-files/components/ui/sheet.tsx
- ./.reference-files/unused-files/components/ui/skeleton.tsx
- ./.reference-files/unused-files/components/ui/slider.tsx
- ./.reference-files/unused-files/components/ui/table.tsx
- ./.reference-files/unused-files/components/ui/toaster.tsx
- ./.reference-files/unused-files/components/ui/toggle-group.tsx
- ./.reference-files/unused-files/components/ui/toggle.tsx
- ./.reference-files/unused-files/components/ui/tooltip.tsx
- ./.reference-files/unused-files/components/ui/use-mobile.tsx
- ./app/about/page.tsx
- ./app/about/testamonials/page.tsx
- ./app/contact/page.tsx
- ./app/layout.tsx
- ./app/page.tsx
- ./app/playground/page.tsx
- ./app/portfolio/gamified-adaptive-statistics-tutor/page.tsx
- ./app/portfolio/page.tsx
- ./components/common/gradient-text.tsx
- ./components/contact-form.tsx
- ./components/layout/container.tsx
- ./components/layout/footer.tsx
- ./components/layout/navigation-desktop.tsx
- ./components/layout/navigation-mobile.tsx
- ./components/layout/navigation.tsx
- ./components/layout/page-layout.tsx
- ./components/layout/section.tsx
- ./components/sections/home/cta-section.tsx
- ./components/sections/home/expertise-section.tsx
- ./components/sections/home/featured-projects.tsx
- ./components/sections/home/hero-section.tsx
- ./components/sections/home/hero-test.tsx
- ./components/sections/home/main-content-section.tsx
- ./components/sections/home/project-one.tsx
- ./components/sections/home/project-test.tsx
- ./components/sections/home/rotating-quote-section.tsx
- ./components/sections/home/toolstack-section.tsx
- ./components/ui/accordion.tsx
- ./components/ui/aspect-ratio.tsx
- ./components/ui/badge.tsx
- ./components/ui/button-icon.tsx
- ./components/ui/button.tsx
- ./components/ui/card.tsx
- ./components/ui/iceberg-svg.tsx
- ./components/ui/input.tsx
- ./components/ui/label.tsx
- ./components/ui/logo-badge.tsx
- ./components/ui/separator.tsx
- ./components/ui/sheet.tsx
- ./components/ui/skew-tag.tsx
- ./components/ui/skewed-box-container.tsx
- ./components/ui/skewed-box.tsx
- ./components/ui/skewed-button.tsx
- ./components/ui/skewed-nav-link.tsx
- ./components/ui/speech-bubble.tsx
- ./components/ui/spotlight-background.tsx
- ./components/ui/switch.tsx
- ./components/ui/tabs.tsx
- ./components/ui/textarea.tsx
- ./components/ui/toast.tsx
- ./hooks/use-mobile.tsx

</details>

#### .zip (1 files)

<details>
<summary>Show files</summary>

- ./.reference-files/portfolio_markdown_files.zip

</details>

#### .js (18 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-docs/configs/.eslintrc.js
- ./.reference-files/project-docs/configs/.prettierrc.js
- ./.reference-files/project-docs/configs/eslint.config.js
- ./eslint.config.js
- ./prettier.config.js
- ./public/learning-objects/escape-room-learning-activity/assets/js/CPM.js
- ./public/learning-objects/escape-room-learning-activity/assets/js/CPXHRLoader.js
- ./public/learning-objects/escape-room-learning-activity/assets/js/jquery-1.11.3.min.js
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/playbarScript.js
- ./public/learning-objects/escape-room-learning-activity/browsersniff.js
- ./public/learning-objects/escape-room-learning-activity/SCORM_utilities.js
- ./public/learning-objects/escape-room-learning-activity/scormdriver.js
- ./public/learning-objects/escape-room-learning-activity/Utilities.js
- ./public/learning-objects/stats-zoo-learning-activity/assets/js/CPM.js
- ./public/learning-objects/stats-zoo-learning-activity/assets/js/CPXHRLoader.js
- ./public/learning-objects/stats-zoo-learning-activity/assets/js/jquery-1.11.3.min.js
- ./scripts/document-project-single.js
- ./scripts/document-project.js

</details>

#### .mjs (2 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-docs/configs/next.config.mjs
- ./next.config.mjs

</details>

#### .json (46 files)

<details>
<summary>Show files</summary>

- ./.reference-files/project-docs/configs/package.json
- ./.reference-files/project-docs/configs/tsconfig.json
- ./.vscode/extensions.json
- ./.vscode/launch.json
- ./.vscode/settings.json
- ./components.json
- ./knip.json
- ./package.json
- ./public/learning-objects/escape-room-learning-activity/dr/img1.json
- ./public/learning-objects/escape-room-learning-activity/dr/img2.json
- ./public/learning-objects/escape-room-learning-activity/dr/img3.json
- ./public/learning-objects/escape-room-learning-activity/dr/img4.json
- ./public/learning-objects/escape-room-learning-activity/dr/img5.json
- ./public/learning-objects/escape-room-learning-activity/dr/img6.json
- ./public/learning-objects/escape-room-learning-activity/dr/imgmd.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img1.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img10.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img11.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img12.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img13.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img14.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img15.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img16.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img17.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img18.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img19.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img2.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img20.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img21.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img22.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img23.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img24.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img25.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img26.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img27.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img28.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img29.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img3.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img4.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img5.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img6.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img7.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img8.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/img9.json
- ./public/learning-objects/stats-zoo-learning-activity/dr/imgmd.json
- ./tsconfig.json

</details>

#### .txt (3 files)

<details>
<summary>Show files</summary>

- ./.reference-files/spotlight-wide-code.txt
- ./public/learning-objects/escape-room-learning-activity/project.txt
- ./public/learning-objects/stats-zoo-learning-activity/project.txt

</details>

#### .svg (13 files)

<details>
<summary>Show files</summary>

- ./.reference-files/venn_training_overlap.svg
- ./public/icons/commit-bullet.svg
- ./public/icons/cross.svg
- ./public/icons/gem-lavender.svg
- ./public/icons/key-foreground-left-large.svg
- ./public/icons/key-foreground.svg
- ./public/icons/key-solid-foreground-left.svg
- ./public/icons/key-solid-foreground.svg
- ./public/icons/trophy-filled.svg
- ./public/key-foreground-left-large.svg
- ./public/placeholder.svg
- ./public/portfolio-images/gamified-statistics-tutor/learning-path.svg
- ./public/spotlight.svg

</details>

#### .code-snippets (1 files)

<details>
<summary>Show files</summary>

- ./.vscode/snippets.code-snippets

</details>

#### .cjs (1 files)

<details>
<summary>Show files</summary>

- ./postcss.config.cjs

</details>

#### .otf (1 files)

<details>
<summary>Show files</summary>

- ./public/fonts/Gimlet_Sans_Variable_Regular.otf

</details>

#### .xsd (5 files)

<details>
<summary>Show files</summary>

- ./public/learning-objects/escape-room-learning-activity/adlcp_rootv1p2.xsd
- ./public/learning-objects/escape-room-learning-activity/ims_xml.xsd
- ./public/learning-objects/escape-room-learning-activity/imscp_rootv1p1p2.xsd
- ./public/learning-objects/escape-room-learning-activity/imsmd_rootv1p2p1.xsd
- ./public/learning-objects/escape-room-learning-activity/ScormEnginePackageProperties.xsd

</details>

#### .mp3 (7 files)

<details>
<summary>Show files</summary>

- ./public/learning-objects/escape-room-learning-activity/ar/12633.mp3
- ./public/learning-objects/escape-room-learning-activity/ar/15812.mp3
- ./public/learning-objects/escape-room-learning-activity/ar/15839.mp3
- ./public/learning-objects/escape-room-learning-activity/ar/166512.mp3
- ./public/learning-objects/escape-room-learning-activity/ar/Mouse.mp3
- ./public/learning-objects/stats-zoo-learning-activity/ar/47974.mp3
- ./public/learning-objects/stats-zoo-learning-activity/ar/Mouse.mp3

</details>

#### .gif (25 files)

<details>
<summary>Show files</summary>

- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/animated-overlay.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/arrow_right.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/hotspot.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/img_trans.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/loader_transparent.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/loader.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/Pause.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/Pause2x.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/Play.gif
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/Play2x.gif
- ./public/learning-objects/escape-room-learning-activity/dr/loading.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/animated-overlay.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/arrow_right.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/hotspot.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/img_trans.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/loader_transparent.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/loader.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/Pause.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/Pause2x.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/Play.gif
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/Play2x.gif
- ./public/learning-objects/stats-zoo-learning-activity/dr/loading.gif
- ./public/portfolio-images/escape-room-preview-optimized.gif
- ./public/portfolio-images/escape-room-preview-reoptimized.gif
- ./public/portfolio-images/escape-room-preview.gif

</details>

#### .png (221 files)

<details>
<summary>Show files</summary>

- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_flat_55_999999_40x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_flat_75_aaaaaa_40x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_glass_45_0078ae_1x400.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_glass_55_f8da4e_1x400.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_glass_75_79c9ec_1x400.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_gloss-wave_45_e14f1c_500x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_gloss-wave_50_6eac2c_500x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_gloss-wave_75_2191c0_500x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-bg_inset-hard_100_fcfdfd_1x100.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_0078ae_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_056b93_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_d8e7f3_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_e0fdff_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_f5e175_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_f7a50d_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/css/start/images/ui-icons_fcd113_256x240.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/ccClose.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/checkBox_disabled.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/checkBox_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/checkBox_selected.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/checkBox_selectedDisabled.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/closeReviewButton.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/correct_answer_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/correct_answer_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/correct_question_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/correct_question_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/dd_arrow.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/expand_icon.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/expand_icon@2x.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/gesturemobileicon.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/gesturemobileicon@2x.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/gesturemobileimage2.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/gesturemobilelandscape.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/gesturetabletimage.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/hotspot_correct_answer_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/hotspot_incorrect_answer_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/incorrect_answer_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/incorrect_answer_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/incorrect_question_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/incorrect_question_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/movieexpire.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/partial_correct_question_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/partial_correct_question_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/placeholder.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/Play_icon.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/radioButton_disabled.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/radioButton_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/radioButton_selected.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/radioButton_selectedDisabled.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/sequenceReview.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/skip_answer_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/skip_answer_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/skip_question_normal.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/skip_question_small.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/toc.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidbg.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidfullscreen.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidpause.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidplay.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidrewind.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidslider.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidstop.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidvolume.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidvolume2.png
- ./public/learning-objects/escape-room-learning-activity/assets/htmlimages/vidvolumemute.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/AudioOff.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/AudioOn.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/BackGround.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Backward.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/CC.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Color.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/ColorSmall.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Exit.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/FastForward.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/FastForward1.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/FastForward2.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Forward.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Glow.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/GlowSmall.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Height.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/InnerStroke.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/InnerStrokeSmall.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Pause.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Play.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Progress.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Rewind.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Shade.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/ShadeSmall.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Stroke.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/StrokeSmall.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/Thumb.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/ThumbBase.png
- ./public/learning-objects/escape-room-learning-activity/assets/playbar/PlaybarIcons/TOC.png
- ./public/learning-objects/escape-room-learning-activity/assets/TOC_icons/collapseIcon.png
- ./public/learning-objects/escape-room-learning-activity/assets/TOC_icons/expandIcon.png
- ./public/learning-objects/escape-room-learning-activity/assets/TOC_icons/photo.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/blankBookmark.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/clear.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/expander.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/fullBookmark.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/go.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/infoClose.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/moreinfo.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/searchBtnNormal.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/searchBtnSelect.png
- ./public/learning-objects/escape-room-learning-activity/assets/toc/tocIcons/visited.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_flat_55_999999_40x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_flat_75_aaaaaa_40x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_glass_45_0078ae_1x400.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_glass_55_f8da4e_1x400.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_glass_75_79c9ec_1x400.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_gloss-wave_45_e14f1c_500x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_gloss-wave_50_6eac2c_500x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_gloss-wave_75_2191c0_500x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-bg_inset-hard_100_fcfdfd_1x100.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_0078ae_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_056b93_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_d8e7f3_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_e0fdff_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_f5e175_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_f7a50d_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/css/start/images/ui-icons_fcd113_256x240.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/ccClose.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/checkBox_disabled.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/checkBox_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/checkBox_selected.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/checkBox_selectedDisabled.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/closeReviewButton.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/correct_answer_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/correct_answer_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/correct_question_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/correct_question_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/dd_arrow.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/expand_icon.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/expand_icon@2x.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/gesturemobileicon.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/gesturemobileicon@2x.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/gesturemobileimage2.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/gesturemobilelandscape.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/gesturetabletimage.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/hotspot_correct_answer_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/hotspot_incorrect_answer_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/incorrect_answer_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/incorrect_answer_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/incorrect_question_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/incorrect_question_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/movieexpire.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/partial_correct_question_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/partial_correct_question_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/placeholder.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/Play_icon.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/radioButton_disabled.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/radioButton_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/radioButton_selected.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/radioButton_selectedDisabled.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/sequenceReview.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/skip_answer_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/skip_answer_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/skip_question_normal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/skip_question_small.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/toc.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidbg.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidfullscreen.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidpause.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidplay.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidrewind.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidslider.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidstop.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidvolume.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidvolume2.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/htmlimages/vidvolumemute.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/TOC_icons/collapseIcon.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/TOC_icons/expandIcon.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/TOC_icons/photo.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/blankBookmark.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/clear.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/expander.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/fullBookmark.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/go.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/infoClose.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/moreinfo.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/searchBtnNormal.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/searchBtnSelect.png
- ./public/learning-objects/stats-zoo-learning-activity/assets/toc/tocIcons/visited.png
- ./public/portfolio-images/adaptive-statistics-tutor.png
- ./public/portfolio-images/game-based-learning-design/Beanstalk Videos – ETC s Darpa Engage 2.png
- ./public/portfolio-images/game-based-learning-design/Beanstalk Videos – ETC s Darpa Engage 3.png
- ./public/portfolio-images/game-based-learning-design/Beanstalk Videos – ETC s Darpa Engage.png
- ./public/portfolio-images/game-based-learning-design/beanstalkfeature.png
- ./public/portfolio-images/game-based-learning-design/BIOSTATSfEATURE.png
- ./public/portfolio-images/game-based-learning-design/ENGAGE poster border.png
- ./public/portfolio-images/game-based-learning-design/ENGAGE-poster-20120912-1.png
- ./public/portfolio-images/game-based-learning-design/gamedesignttm_feature.png
- ./public/portfolio-images/game-based-learning-design/interactiveproblemset_dragging_cropped.png
- ./public/portfolio-images/game-based-learning-design/Mt.-Lebanon-School-District-Markham-Elementary-4th-Grade-Patti-McAuley.png
- ./public/portfolio-images/game-based-learning-design/Projects – ETC s Darpa Engage 2.png
- ./public/portfolio-images/game-based-learning-design/Projects – ETC s Darpa Engage 3.png
- ./public/portfolio-images/game-based-learning-design/Projects – ETC s Darpa Engage 4.png
- ./public/portfolio-images/game-based-learning-design/Projects – ETC s Darpa Engage.png
- ./public/portfolio-images/game-based-learning-design/tt,14.png
- ./public/portfolio-images/game-based-learning-design/tt14.png
- ./public/portfolio-images/game-based-learning-design/ttm1.png
- ./public/portfolio-images/game-based-learning-design/ttm10.png
- ./public/portfolio-images/game-based-learning-design/ttm11.png
- ./public/portfolio-images/game-based-learning-design/ttm12.png
- ./public/portfolio-images/game-based-learning-design/ttm15.png
- ./public/portfolio-images/game-based-learning-design/ttm2.png
- ./public/portfolio-images/game-based-learning-design/ttm3.png
- ./public/portfolio-images/game-based-learning-design/ttm5.png
- ./public/portfolio-images/game-based-learning-design/ttm6.png
- ./public/portfolio-images/game-based-learning-design/ttm7.png
- ./public/portfolio-images/game-based-learning-design/ttm8.png
- ./public/portfolio-images/game-based-learning-design/ttm9.png
- ./public/portfolio-images/gamified-statistics-tutor/Course  Applied Biostatistics.png
- ./public/portfolio-images/gamified-statistics-tutor/Escape Room Tutor Instructions.png
- ./public/portfolio-images/gamified-statistics-tutor/escape-room-statistic-tutor-hint.png
- ./public/portfolio-images/gamified-statistics-tutor/escaperoomfeature-1024x1024.png
- ./public/portfolio-images/gamified-statistics-tutor/escaperoomfeature.png
- ./public/portfolio-images/gamified-statistics-tutor/interactiveproblemset_dragging_cropped.png
- ./public/portfolio-images/gamified-statistics-tutor/magic-book-brand-light.png
- ./public/portfolio-images/gamified-statistics-tutor/treasure_feature.png

</details>

#### .xml (2 files)

<details>
<summary>Show files</summary>

- ./public/learning-objects/escape-room-learning-activity/imsmanifest.xml
- ./public/learning-objects/escape-room-learning-activity/metadata.xml

</details>

#### .jpg (3 files)

<details>
<summary>Show files</summary>

- ./public/placeholder-user.jpg
- ./public/placeholder.jpg
- ./public/portfolio-images/game-based-learning-design/Slide10.jpg

</details>

#### .pptx (2 files)

<details>
<summary>Show files</summary>

- ./public/portfolio-images/game-based-learning-design/Balance-Scale-Levels-v5-WITH-INQUIRY.pptx
- ./public/portfolio-images/gamified-statistics-tutor/Escape Room Feedback.pptx

</details>

#### .mp4 (2 files)

<details>
<summary>Show files</summary>

- ./public/portfolio-images/game-based-learning-design/BiostaticiansTreasure.mp4
- ./public/portfolio-images/gamified-statistics-tutor/EscapeRoomComments-1.mp4

</details>

#### .pdf (3 files)

<details>
<summary>Show files</summary>

- ./public/portfolio-images/game-based-learning-design/ENGAGE-poster-20120912.pdf
- ./public/portfolio-images/game-based-learning-design/INQ-Item-by-item-slides.pdf
- ./public/portfolio-images/game-based-learning-design/Mt.-Lebanon-School-District-Markham-Elementary-4th-Grade-Patti-McAuley.pdf

</details>

#### .xlsx (1 files)

<details>
<summary>Show files</summary>

- ./public/portfolio-images/gamified-statistics-tutor/Biostatistics Inference Instructional analysis.xlsx

</details>

#### .PNG (11 files)

<details>
<summary>Show files</summary>

- ./public/portfolio-images/gamified-statistics-tutor/escaperoom.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_1.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_2.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_3.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_4.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_5.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_6.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_7.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactive_8.PNG
- ./public/portfolio-images/gamified-statistics-tutor/interactiveproblemset_dragging.PNG
- ./public/portfolio-images/gamified-statistics-tutor/treasureCover.PNG

</details>

#### .py (1 files)

<details>
<summary>Show files</summary>

- ./scripts/generate-color-reference.py

</details>

## Component Patterns

This section contains 5 representative components from your project.

### ./.reference-files/playground-page-old.tsx

```tsx
'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlaygroundPage(): ReactElement {
  return (
    <PageLayout>
      <Container>
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-[var(--color-light-text)]">Design System</h1>
          <p className="text-[var(--color-muted-text)]">
            A showcase of UI components and design tokens used in this project.
          </p>
        </div>

        <Tabs defaultValue="components" className="mb-12 w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="gradients">Gradients</TabsTrigger>
          </TabsList>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            {/* Buttons Section */}
            <Section title="Buttons" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Different button styles for various contexts</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button className="bg-[var(--color-brand)] text-[var(--color-light-text)]">
                    Default
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-[var(--color-muted-text)] text-[var(--color-light-text)]"
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[var(--color-brand)] text-[var(--color-brand)]"
                  >
                    Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-[var(--color-card)] text-[var(--color-light-text)]"
                  >
                    Ghost
                  </Button>
                  <Button variant="link" className="text-[var(--color-accent)]">
                    Link
                  </Button>
                  <Button
                    variant="destructive"
                    className="bg-[var(--color-dark)] text-[var(--color-light-text)]"
                  >
                    Destructive
                  </Button>
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]">
                    Gradient Button 1
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[3px] border-transparent bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, var(--color-brand), var(--color-accent))',
                      backgroundClip: 'padding-box',
                      borderRadius: '0.75rem',
                      borderWidth: '2px',
                    }}
                  >
                    Gradient Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-muted-text)] text-[var(--color-light-text)]"
                  >
                    Gradient Ghost Button
                  </Button>
                  <Button
                    variant="destructive"
                    className="bg-gradient-to-r from-[var(--color-destructive)] to-[var(--color-dark)] text-[var(--color-light-text)]"
                  >
                    Gradient Destructive Button
                  </Button>
                  <Button
                    variant="link"
                    className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-light-text)] bg-clip-text text-transparent"
                  >
                    Gradient Link Button
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-gradient-to-r from-[var(--color-muted-text)] to-[var(--color-brand)] text-[var(--color-light-text)]"
                  >
                    Gradient Secondary Button
                  </Button>
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-amber)] text-[var(--color-light-text)] hover:from-[var(--color-amber)] hover:to-[var(--color-brand)]">
                    Hover Gradient Button
                  </Button>
                </CardContent>
              </Card>

              {/* Highlighted Button Section */}
              <Section title="Highlighted Buttons" className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]">
                    Highlighted Button
                  </Button>
                </div>
              </Section>
            </Section>

            {/* Gradient Card Background */}
            <Section title="Gradient Cards" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div
                  className="rounded-lg p-6"
                  style={{
                    background: `linear-gradient(to bottom right, var(--color-brand), var(--color-muted-text))`,
                    color: 'white',
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Gradient Card</h3>
                  <p>
                    This card uses a gradient background from var(--color-brand) to
                    var(--color-muted-text).
                  </p>
                  <Button className="mt-4 bg-white text-[var(--color-accent)] hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
            </Section>
            <Section>
              {/* Card with Gradient Background */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom right, var(--primary), var(--accent))`, // Gradient from brand color to accent color
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Stunning Gradient Background
                      </h2>
                      <p className="text-xl">
                        This card features a linear gradient from the brand color to the accent
                        color, making it visually appealing and dynamic.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to top left, var(--background), var(--muted))`, // Dark to light gradient
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Dark to Light Gradient
                      </h2>
                      <p className="text-xl">
                        This card has a gradient that transitions from a dark background to a
                        lighter muted color, giving it a modern and elegant feel.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to right, var(--muted), var(--accent-light))`, // Subtle gradient from muted to a light accent
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Soft Gradient with Accent
                      </h2>
                      <p className="text-xl">
                        A subtle gradient from muted tones to a lighter accent color, creating a
                        refined and professional look.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--accent)] hover:bg-white/90">
                        Discover More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom right, var(--accent), var(--primary))`, // Bold vibrant gradient
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Bold and Vibrant
                      </h2>
                      <p className="text-xl">
                        A vibrant gradient between accent and brand colors that grabs attention and
                        adds a pop of color to the page.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Explore Now
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom, var(--background), var(--muted))`, // Simple gradient with darker edges
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Simple Gradient with Darker Edges
                      </h2>
                      <p className="text-xl">
                        A straightforward gradient from dark to muted tones, providing a minimalist
                        feel while adding a touch of elegance.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-xl border-[var(--border)] p-6"
                      style={{
                        background: `linear-gradient(to right, var(--muted-light), var(--accent-light))`, // Soft gradient with rounded border
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Soft Gradient with Rounded Border
                      </h2>
                      <p className="text-xl">
                        A soft gradient background with rounded corners, perfect for showcasing
                        products or services in a subtle, elegant way.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--accent)] hover:bg-white/90">
                        Get Started
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-transparent">
                        Gradient Text Title
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        A Beautiful <span className="gradient-text-ochre">Design</span>
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This card uses solid colors for the background and gradient text to create a
                      dynamic effect. It highlights important content using color gradients.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `var(--card)`, // Solid background color
                        border: `3px solid transparent`,
                        borderImage: `linear-gradient(to right, var(--primary), var(--accent)) 1`,
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Border Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card uses a gradient border to give the content a dynamic and modern
                        look while maintaining a solid background for the card itself.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Explore Now
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Button Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card features a gradient button while maintaining a solid background
                        color for the card. The button adds an extra pop of color and visual
                        interest.
                      </p>
                    </div>
                    <Button className="mt-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white hover:bg-opacity-[0.8]">
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `var(--card)`,
                        boxShadow: `0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.15), inset 0 0 0 3px linear-gradient(to bottom right, var(--primary), var(--accent))`,
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Shadow Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card features a dynamic gradient shadow for a unique effect, giving the
                        card a sense of depth while maintaining a solid background.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="relative rounded-lg p-6"
                      style={{
                        backgroundImage: `url('https://source.unsplash.com/random')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-black/40"></div>
                      <div className="relative z-10 text-left text-white">
                        <h2 className="mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-transparent">
                          Gradient Text Overlay
                        </h2>
                        <p className="text-xl">
                          This card features gradient text overlaying a background image, creating
                          an eye-catching effect.
                        </p>
                        <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                          Discover More
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Card with Dark Background */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Dark Theme Card
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Clean and Modern <span className="gradient-text-ochre">Design</span>
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This card uses a darker background color to bring out the importance of the
                      content. It features subtle text gradients to highlight key concepts.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Gradient Card Example */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Gradient Card Title
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Beautiful <span className="gradient-text-ochre">Design</span>
                      </h1>
                      <h1 className="mt-2 text-right text-[clamp(1.5rem,6vw,3rem)] font-bold">
                        with a difference.
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This is a gradient card styled with the updated color palette. It transitions
                      smoothly and highlights important text with color gradients.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Plain Card with Border */}
              <Card className="mb-12 border border-[var(--border)]">
                <CardContent className="bg-[var(--card)] p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Simple Border Card
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Elegant Design
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This is a simple bordered card with a clean design, using the core brand
                      colors and layout for a more traditional style.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Section title="Typography" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Plus Jakarta Sans</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Headings</CardTitle>
                  <CardDescription>
                    Typography scale for headings using Plus Jakarta Sans
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h1 className="text-4xl font-extrabold">Heading 1</h1>
                  <h2 className="text-3xl font-semibold">Heading 2</h2>
                  <h3 className="text-2xl font-semibold">Heading 3</h3>
                  <h4 className="text-xl font-semibold">Heading 4</h4>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Body Text</CardTitle>
                  <CardDescription>Typography for body content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="leading-7">
                    The king, seeing how much happier his subjects were, realized the error of his
                    ways and promised to rule with fairness and compassion.
                  </p>
                  <p className="text-sm text-foreground">
                    This is smaller text, often used for secondary information.
                  </p>
                  <p className="text-lg font-medium">
                    This is larger text, often used for important information.
                  </p>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Section title="Color Palette" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Design Tokens</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>CSS Variable Colors</CardTitle>
                  <CardDescription>Display of CSS variables and their HSL values</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-brand</div>
                    <div className="text-xs text-foreground">HSL(260, 58%, 52%)</div>
                  </div>
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-accent</div>
                    <div className="text-xs text-foreground">HSL(30, 90%, 57%)</div>
                  </div>
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-text)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-muted-text</div>
                    <div className="text-xs text-foreground">HSL(240, 10%, 65%)</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shades of Brand Color</CardTitle>
                  <CardDescription>Shades of the brand color for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#734CA9' }}
                    ></div>
                    <div className="text-xs font-medium">Brand Color</div>
                    <div className="text-xs text-foreground">#734CA9</div>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#5C3C87' }}
                    ></div>
                    <div className="text-xs font-medium">Darker Shade</div>
                    <div className="text-xs text-foreground">#5C3C87</div>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#4A2D6B' }}
                    ></div>
                    <div className="text-xs font-medium">Darkest Shade</div>
                    <div className="text-xs text-foreground">#4A2D6B</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>CSS Variable Color Swatches</CardTitle>
                  <CardDescription>Colors defined in globals.css for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  {/* Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand</div>
                    <div className="text-xs text-foreground">#734CA9</div>
                  </div>

                  {/* Light Violet */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-light</div>
                    <div className="text-xs text-foreground">#D1A7E4</div>
                  </div>

                  {/* Deep Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-dark</div>
                    <div className="text-xs text-foreground">#39344B</div>
                  </div>

                  {/* Neutral Light Gray */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-neutral)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-neutral</div>
                    <div className="text-xs text-foreground">#BEB8CD</div>
                  </div>

                  {/* Darker Violet */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-dark-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-dark-text</div>
                    <div className="text-xs text-foreground">#5C3C87</div>
                  </div>

                  {/* Amber Accent */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent</div>
                    <div className="text-xs text-foreground">#E3A34E</div>
                  </div>

                  {/* Light Text */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-light-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-light-text</div>
                    <div className="text-xs text-foreground">#FFFFFF</div>
                  </div>

                  {/* Muted Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-text</div>
                    <div className="text-xs text-foreground">#5C3C87</div>
                  </div>

                  {/* Background Dark Slate */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-background)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-background</div>
                    <div className="text-xs text-foreground">#292A3E</div>
                  </div>

                  {/* Card Background */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-card)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-card</div>
                    <div className="text-xs text-foreground">#343A47</div>
                  </div>

                  {/* Lighter Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-light</div>
                    <div className="text-xs text-foreground">#8C74C2</div>
                  </div>

                  {/* Darker Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-dark</div>
                    <div className="text-xs text-foreground">#5C3C87</div>
                  </div>

                  {/* Darker Shade of Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-darker)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-darker</div>
                    <div className="text-xs text-foreground">#4A2D6B</div>
                  </div>

                  {/* Lighter Amber */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent-light</div>
                    <div className="text-xs text-foreground">#F0B36D</div>
                  </div>

                  {/* Darker Amber */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent-dark</div>
                    <div className="text-xs text-foreground">#C26A2A</div>
                  </div>

                  {/* Muted Light */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-light</div>
                    <div className="text-xs text-foreground">#6A4D72</div>
                  </div>

                  {/* Muted Dark */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-dark</div>
                    <div className="text-xs text-foreground">#4A2D52</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All Gradient Colors in UI Theme</CardTitle>
                  <CardDescription>Colors used in gradients for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  {/* Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#734CA9' }}
                    ></div>
                    <div className="text-xs font-medium">Brand Color</div>
                    <div className="text-xs text-foreground">#734CA9</div>
                  </div>

                  {/* Amber Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#E3A34E' }}
                    ></div>
                    <div className="text-xs font-medium">Amber</div>
                    <div className="text-xs text-foreground">#E3A34E</div>
                  </div>

                  {/* Sage Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#A3B7A3' }}
                    ></div>
                    <div className="text-xs font-medium">Sage</div>
                    <div className="text-xs text-foreground">#A3B7A3</div>
                  </div>

                  {/* Dark Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#292A3E' }}
                    ></div>
                    <div className="text-xs font-medium">Dark Purple</div>
                    <div className="text-xs text-foreground">#292A3E</div>
                  </div>

                  {/* Light Sky Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#A3C8D6' }}
                    ></div>
                    <div className="text-xs font-medium">Sky Blue</div>
                    <div className="text-xs text-foreground">#A3C8D6</div>
                  </div>

                  {/* Soft Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#6B8FA6' }}
                    ></div>
                    <div className="text-xs font-medium">Soft Blue</div>
                    <div className="text-xs text-foreground">#6B8FA6</div>
                  </div>

                  {/* Muted Text */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#BEB8CD' }}
                    ></div>
                    <div className="text-xs font-medium">Muted Text</div>
                    <div className="text-xs text-foreground">#BEB8CD</div>
                  </div>

                  {/* Dark Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#3A3D55' }}
                    ></div>
                    <div className="text-xs font-medium">Dark Blue</div>
                    <div className="text-xs text-foreground">#3A3D55</div>
                  </div>

                  {/* Ochre Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#E3A34E' }}
                    ></div>
                    <div className="text-xs font-medium">Ochre</div>
                    <div className="text-xs text-foreground">#E3A34E</div>
                  </div>

                  {/* Lavender */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#B6A0D2' }}
                    ></div>
                    <div className="text-xs font-medium">Lavender</div>
                    <div className="text-xs text-foreground">#B6A0D2</div>
                  </div>

                  {/* Pink to Lavender Gradient */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#F1A0D1' }}
                    ></div>
                    <div className="text-xs font-medium">Pink</div>
                    <div className="text-xs text-foreground">#F1A0D1</div>
                  </div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Gradients Tab */}
          <TabsContent value="gradients" className="space-y-8">
            <Section title="Gradient Backgrounds" className="space-y-6">
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#E3A34E]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Purple to Amber Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#E3A34E]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#292A3E] to-[#3A3D55]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Dark to Light Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#292A3E] to-[#3A3D55]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#E3A34E] to-[#A3B7A3]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Amber to Sage Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#E3A34E] to-[#A3B7A3]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#6B8FA6]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Muted Purple to Soft Blue Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#6B8FA6]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#292A3E] to-[#A3C8D6]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Deep Slate to Sky Blue Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#292A3E] to-[#A3C8D6]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#E3A34E] to-[#A7C5A3]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Ochre to Sage Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#E3A34E] to-[#A7C5A3]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#F1A0D1] to-[#9C7DFF]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Soft Pink to Lavender Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#F1A0D1] to-[#9C7DFF]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#B6A0D2]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Dark Purple to Light Lavender Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#B6A0D2]
                </code>
              </div>
              <div>
                <ul>
                  <li>
                    Amber to Sage: A warm-to-cool gradient for a professional yet vibrant
                    appearance.
                  </li>
                  <li>
                    Muted Purple to Soft Blue: Subtle gradient with calming and complementary tones.
                  </li>
                  <li>Deep Slate to Sky Blue:Cool gradient providing balance and calmness.</li>
                  <li>Ochre to Sage:A natural earthy gradient for grounding tones.</li>
                  <li>Soft Pink to Lavender: Playful and light gradient for a gentle aesthetic</li>
                  <li>
                    Dark Purple to Light Lavender: A monochromatic gradient that sticks to one
                    family of colors for a harmonious effect.
                  </li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="bg-gradient-animated flex h-24 items-center justify-center rounded-lg">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Animated Brand Gradient
                  </span>
                </div>
                <code className="text-xs text-foreground">
                  bg-gradient-animated (custom class)
                </code>
              </div>
            </Section>

            <Section title="Text Gradients" className="space-y-4">
              <div className="space-y-1">
                <h2 className="bg-gradient-to-r from-[#734CA9] to-[#E3A34E] bg-clip-text text-4xl font-bold text-transparent">
                  Gradient Text Example
                </h2>
                <code className="text-xs text-foreground">
                  text-transparent bg-clip-text bg-gradient-to-r from-[#734CA9] to-[#E3A34E]
                </code>
              </div>
              <div className="space-y-1">
                <h2 className="text-gradient-animated text-4xl font-bold">
                  Animated Gradient Text
                </h2>
                <code className="text-xs text-foreground">
                  text-gradient-animated (custom class)
                </code>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </Container>
    </PageLayout>
  )
}

```

#### Analysis

- **Type**: Client Component
- **Imports**: 12 dependencies
  - lucide-react
  - @/components/ui/button
  - @/components/ui/card
  - @/components/ui/tabs
  - @/components/ui/separator
  - @/components/ui/badge
  - @/components/layout/page-layout
  - @/components/layout/container
  - @/components/layout/section
  - react
  - framer-motion
  - next/link
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes, Inline Styles

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
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <h1 className="mb-4 text-3xl font-bold">UI Component Playground</h1>

      {/* Buttons */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
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
        <div className="flex max-w-sm flex-col gap-4">
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
          className="relative overflow-hidden rounded-lg bg-brand p-8 text-brand-foreground md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Collaborate?</h2>
            <p className="max-w-2xl text-lg md:text-xl">
              Let&apos;s discuss how we can create innovative learning solutions that drive real impact for your
              organization.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 hover:bg-white/10"
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
      description: "Thank you for your message. I&apos;ll get back to you soon.",
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
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
          <p className="max-w-2xl text-foreground">
            Explore my portfolio of innovative instructional design solutions that solve real learning challenges.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.label}</CardTitle>
                  <CardDescription>{project.subLabel}</CardDescription>
                </CardHeader>
                <CardContent className="grow">
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
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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

- **TypeScript Version**: ^5.8.3
- Use explicit type annotations for function parameters and return types
- Define interfaces for component props
- Use type imports: `import type { X } from 'y'`

### UI Component Patterns

- No specific UI library detected, follow the project's existing styling patterns

### File Naming Conventions

- Use kebab-case for file names (e.g., `button-group.tsx`)
