import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'

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
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        display: ['"Gimlet Sans Variable"', ...fontFamily.sans],
      },
      /* === Colors (from CSS variables) === */
      colors: {
        /* Semantic Backgrounds */
        background: 'hsl(var(--background))',
        'background-alt': 'hsl(var(--background-alt))',
        card: 'hsl(var(--card))',
        'card-alt': 'hsl(var(--card-alt))',
        'card-background': 'hsl(var(--card-background))',
        'card-light': 'hsl(var(--card-light))',

        /* Text / Foreground */
        foreground: 'hsl(var(--foreground))',
        'foreground-muted': 'hsl(var(--foreground-muted))',
        'foreground-light': 'hsl(var(--foreground-light))',
        'foreground-dark': 'hsl(var(--foreground-dark))',
        'foreground-lavender': 'hsl(var(--foreground-lavender))',

        /* Brand */
        brand: 'hsl(var(--brand))',
        'brand-light': 'hsl(var(--brand-light))',
        'brand-dark': 'hsl(var(--brand-dark))',
        'brand-darker': 'hsl(var(--brand-darker))',
        /* Primary Duplicated Brand for Convienience */
        primary: 'hsl(var(--brand))',
        'primary-light': 'hsl(var(--brand-light))',
        'primary-dark': 'hsl(var(--brand-dark))',
        'primary-darker': 'hsl(var(--brand-darker))',

        /* Accent */
        accent: 'hsl(var(--accent))',
        'accent-light': 'hsl(var(--accent-light))',
        'accent-dark': 'hsl(var(--accent-dark))',

        /* Supporting / Secondary */
        secondary: 'hsl(var(--secondary))',
        'secondary-light': 'hsl(var(--secondary-light))',

        /* Neutral / Muted */
        neutral: 'hsl(var(--neutral))',
        muted: 'hsl(var(--muted))',
        'muted-dark': 'hsl(var(--muted-dark))',

        /* UI Tokens */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        /* Popover & Error */
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',

        /* Additional Gradient Tokens */
        sage: 'hsl(var(--sage))',
        sky: 'hsl(var(--sky))',
        'slate-light': 'hsl(var(--slate-light))',
        pink: 'hsl(var(--pink))',
        lavender: 'hsl(var(--lavender))',
        'lavender-light': 'hsl(var(--lavender-light))',
      },

      backgroundImage: {
        /* === UI Gradient Themes === */
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-muted': 'var(--gradient-muted)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-slate-sky': 'var(--gradient-slate-sky)',
        'gradient-earth': 'var(--gradient-earth)',
        'gradient-playful': 'var(--gradient-playful)',
        'gradient-lavender': 'var(--gradient-lavender)',
        'gradient-accent-light': 'var(--gradient-accent-light)',
        'gradient-accent-light-vertical': 'var(--gradient-accent-light-vertical)',
      },

      /* === Animations === */
      keyframes: {
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideOutFromLeft: {
          '0%': { transform: 'translateX(-10rem)', opacity: '0', visibility: 'hidden' },
          '1%': { visibility: 'visible' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0', visibility: 'hidden' },
        },
      },
      animation: {
        accordionDown: 'accordionDown 0.2s ease-out',
        accordionUp: 'accordionUp 0.2s ease-out',
        'slide-in-from-right': 'slideInRight 0.4s ease-out both',
        'slide-out-from-left': 'slideOutFromLeft 600ms ease-out forwards',
        'slide-out-to-left': 'slideOutToLeft 0.4s ease-out forwards',
      },

      /* === Skew === */
      skew: {
        '20': '20deg',
        '-20': '-20deg',
      },
    },
  },
  plugins: [animate, containerQueries],
} satisfies Config

export default config
