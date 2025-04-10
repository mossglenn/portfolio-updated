import { type ReactElement } from 'react'

import { cn } from '@/lib/utils'

import type React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  variant: 'ochre' | 'slate' | 'sage' | 'warm-dark' | 'light-wash'
  className?: string
}

export function GradientText({ children, variant, className }: GradientTextProps): ReactElement {
  return <span className={cn(`gradient-text-${variant}`, className)}>{children}</span>
}
