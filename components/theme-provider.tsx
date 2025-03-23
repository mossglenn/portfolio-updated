'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'
import { ReactElement } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps): ReactElement {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
