# Code Generation Compatibility Guidelines

Generated: 3/19/2025, 5:56:57 PM

This document provides guidelines for generating code that is compatible with this project.

## React Compatibility

- **React Version**: 18.2.0
- Use React 18 features like automatic batching and concurrent rendering
- Can use hooks like useId(), useSyncExternalStore(), useInsertionEffect()
- Use Suspense for data fetching when appropriate

## Next.js Compatibility

- **Next.js Version**: ^15.1.0

## TypeScript Compatibility

- **TypeScript Version**: ^5.2.2
- Use explicit type annotations for function parameters and return types
- Define interfaces for component props
- Use type imports: `import type { X } from 'y'`

## UI Component Patterns

- No specific UI library detected, follow the project's existing styling patterns

## File Naming Conventions

- Use kebab-case for file names (e.g., `button-group.tsx`)
