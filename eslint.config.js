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
        whitelist: ['gradient-text-*'], // Allow custom classnames
      },
    },
  },
]

export default eslintConfig
