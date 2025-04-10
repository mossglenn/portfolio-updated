import { type ReactElement } from 'react'

import { cn } from '@/lib/utils'

import type React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'default' | 'lg' | 'full'
}

export function Container({ children, className, size = 'default' }: ContainerProps): ReactElement {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'w-full',
  }

  return <div className={cn('mx-auto px-4', sizes[size], className)}>{children}</div>
}
