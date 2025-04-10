'use client'

import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface LogoBadgeProps {
  href?: string
  label?: string
  skewAmount?: number // e.g. 20 means skew-x-20
  backgroundColorClass?: string // e.g. "bg-brand"
  className?: string
}

export function LogoBadge({
  href = '/',
  label = 'AmosGlenn',
  skewAmount = 20,
  backgroundColorClass = 'bg-brand',
  className,
}: LogoBadgeProps): React.ReactElement {
  const skew = `skew-x-${skewAmount}`
  const negSkew = `-skew-x-${skewAmount}`

  return (
    <div className={cn('relative inline-block', className)}>
      {/* Skewed foreground layer */}
      <Link
        className={cn(
          'relative z-10 mr-2 inline-flex items-center justify-center rounded-md px-4 py-2 shadow-md',
          negSkew,
          backgroundColorClass
        )}
        href={href}
      >
        <span
          className={cn(
            'inline-block text-lg font-extrabold',
            skew,
            'text-foreground hover:text-accent-light' // feel free to make this a prop too
          )}
        >
          {label}
        </span>
      </Link>
    </div>
  )
}
