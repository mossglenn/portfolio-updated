import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

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
      /* === Colors (from CSS variables) === */
      colors: {
        /* Semantic Backgrounds */
        background: 'hsl(var(--background))',
        'background-alt': 'hsl(var(--background-alt))',
        card: 'hsl(var(--card))',
        'card-alt': 'hsl(var(--card-alt))',

        /* Text / Foreground */
        foreground: 'hsl(var(--foreground))',
        'foreground-muted': 'hsl(var(--foreground-muted))',
        'foreground-light': 'hsl(var(--foreground-light))',
        'foreground-dark': 'hsl(var(--foreground-dark))',

        /* Brand */
        brand: 'hsl(var(--brand))',
        'brand-light': 'hsl(var(--brand-light))',
        'brand-dark': 'hsl(var(--brand-dark))',
        'brand-darker': 'hsl(var(--brand-darker))',

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

        'gradient-purple-amber': 'linear-gradient(to right, hsl(var(--brand)), hsl(var(--accent)))',
        'gradient-dark-light':
          'linear-gradient(to right, hsl(var(--background)), hsl(var(--slate-light)))',
        'gradient-amber-sage': 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--sage)))',
        'gradient-ochre-sage': 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--sage)))', // same sage token reused
        'gradient-muted-purple-blue':
          'linear-gradient(to right, hsl(var(--brand)), hsl(var(--sky)))',
        'gradient-slate-sky': 'linear-gradient(to right, hsl(var(--background)), hsl(var(--sky)))',
        'gradient-pink-lavender':
          'linear-gradient(to right, hsl(var(--pink)), hsl(var(--lavender)))',
        'gradient-purple-lavender':
          'linear-gradient(to right, hsl(var(--brand)), hsl(var(--lavender-light)))',
      },

      /* === Border Radius === */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
          '0%': { transform: 'translateX(-10rem)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        accordionDown: 'accordionDown 0.2s ease-out',
        accordionUp: 'accordionUp 0.2s ease-out',
        slideInRight: 'slideInRight 0.4s ease-out both',
        slideOutLeft: 'slideOutFromLeft 900ms ease-out forwards',
      },

      /* === Skew === */
      skew: {
        '20': '20deg',
        '-20': '-20deg',
      },
    },
  },
  plugins: [animate],
} satisfies Config

export default config
