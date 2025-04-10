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
      'tailwindcss/no-custom-classname': 'warn',
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
