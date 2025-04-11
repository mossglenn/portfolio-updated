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
