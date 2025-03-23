import type { Config } from 'tailwindcss'
import { generateTailwindConfig } from './lib/design/tailwind-config'

const config = {
  darkMode: ['class'],
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
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover, var(--primary)))',
          light: 'hsl(var(--primary-light, var(--primary)))',
          dark: 'hsl(var(--primary-dark, var(--primary)))',
          muted: 'hsl(var(--primary-muted, var(--primary) / 0.6))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          hover: 'hsl(var(--secondary-hover, var(--secondary)))',
          light: 'hsl(var(--secondary-light, var(--secondary)))',
          dark: 'hsl(var(--secondary-dark, var(--secondary)))',
          muted: 'hsl(var(--secondary-muted, var(--secondary) / 0.6))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          hover: 'hsl(var(--accent-hover, var(--accent)))',
          light: 'hsl(var(--accent-light, var(--accent)))',
          dark: 'hsl(var(--accent-dark, var(--accent)))',
          muted: 'hsl(var(--accent-muted, var(--accent) / 0.6))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Color scales from v0 project
        ochre: {
          50: 'hsl(var(--ochre-50))',
          100: 'hsl(var(--ochre-100))',
          200: 'hsl(var(--ochre-200))',
          300: 'hsl(var(--ochre-300))',
          400: 'hsl(var(--ochre-400))',
          500: 'hsl(var(--ochre-500))',
          600: 'hsl(var(--ochre-600))',
          700: 'hsl(var(--ochre-700))',
          800: 'hsl(var(--ochre-800))',
          900: 'hsl(var(--ochre-900))',
          950: 'hsl(var(--ochre-950))',
        },
        slate: {
          50: 'hsl(var(--slate-50))',
          100: 'hsl(var(--slate-100))',
          200: 'hsl(var(--slate-200))',
          300: 'hsl(var(--slate-300))',
          400: 'hsl(var(--slate-400))',
          500: 'hsl(var(--slate-500))',
          600: 'hsl(var(--slate-600))',
          700: 'hsl(var(--slate-700))',
          800: 'hsl(var(--slate-800))',
          900: 'hsl(var(--slate-900))',
          950: 'hsl(var(--slate-950))',
        },
        sage: {
          50: 'hsl(var(--sage-50))',
          100: 'hsl(var(--sage-100))',
          200: 'hsl(var(--sage-200))',
          300: 'hsl(var(--sage-300))',
          400: 'hsl(var(--sage-400))',
          500: 'hsl(var(--sage-500))',
          600: 'hsl(var(--sage-600))',
          700: 'hsl(var(--sage-700))',
          800: 'hsl(var(--sage-800))',
          900: 'hsl(var(--sage-900))',
          950: 'hsl(var(--sage-950))',
        },
        sand: {
          50: 'hsl(var(--sand-50))',
          100: 'hsl(var(--sand-100))',
          200: 'hsl(var(--sand-200))',
          300: 'hsl(var(--sand-300))',
          400: 'hsl(var(--sand-400))',
          500: 'hsl(var(--sand-500))',
          600: 'hsl(var(--sand-600))',
          700: 'hsl(var(--sand-700))',
          800: 'hsl(var(--sand-800))',
          900: 'hsl(var(--sand-900))',
          950: 'hsl(var(--sand-950))',
        },
        'soft-sand': {
          DEFAULT: 'hsl(var(--soft-sand, var(--sand-50)))',
          dark: 'hsl(var(--soft-sand-dark, var(--sand-100)))',
          muted: 'hsl(var(--soft-sand-muted, var(--sand-50) / 0.7))',
        },
        'foundation-black': {
          DEFAULT: 'hsl(var(--foundation-black, var(--carbon-950)))',
          light: 'hsl(var(--foundation-black-light, var(--carbon-800)))',
          muted: 'hsl(var(--foundation-black-muted, var(--carbon-950) / 0.5))',
        },
      },
      // Background gradients from v0 project
      backgroundImage: {
        'gradient-ochre':
          'linear-gradient(to right, var(--ochre-500), var(--ochre-400), var(--ochre-200))',
        'gradient-slate':
          'linear-gradient(to right, var(--slate-700), var(--slate-600), var(--slate-400))',
        'gradient-sage':
          'linear-gradient(to right, var(--sage-400), var(--sage-300), var(--sage-200))',
        'gradient-warm-dark':
          'linear-gradient(to right, var(--carbon-950), var(--carbon-800), var(--slate-700))',
        'gradient-light-wash':
          'linear-gradient(to right, var(--sand-50), var(--sand-100), var(--sand-200))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // Gradient color stops from v0 project
      gradientColorStops: {
        ochre: {
          from: '#d6a04f',
          via: '#f0b861',
          to: '#ffe3ac',
        },
        slate: {
          from: '#3a4a64',
          via: '#50627e',
          to: '#8494ac',
        },
        sage: {
          from: '#99c2a2',
          via: '#b7d3b7',
          to: '#d6e6cc',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
