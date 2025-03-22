import type React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  variant: 'ochre' | 'slate' | 'sage' | 'warm-dark' | 'light-wash'
  className?: string
}

export function GradientText({ children, variant, className }: GradientTextProps) {
  return <span className={cn(`gradient-text-${variant}`, className)}>{children}</span>
}
