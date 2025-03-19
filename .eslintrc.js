module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
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