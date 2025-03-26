'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoBadgeProps {
  href?: string
  label?: string
  skewAmount?: number // e.g. 20 means skew-x-20
  backgroundColorClass?: string // e.g. "bg-primary"
  className?: string
}

export function LogoBadge({
  href = '/',
  label = 'AmosGlenn',
  skewAmount = 20,
  backgroundColorClass = 'bg-primary',
  className,
}: LogoBadgeProps): React.ReactElement {
  const skew = `skew-x-${skewAmount}`
  const negSkew = `-skew-x-${skewAmount}`

  return (
    <div className={cn('relative inline-block', className)}>
      {/* Skewed foreground layer */}
      <Link
        href={href}
        className={cn(
          'relative z-10 inline-flex items-center justify-center rounded-lg px-4 py-2 shadow-md',
          negSkew,
          backgroundColorClass
        )}
      >
        <span
          className={cn(
            'inline-block text-lg font-extrabold',
            skew,
            'text-accent' // feel free to make this a prop too
          )}
        >
          {label}
        </span>
      </Link>
    </div>
  )
}
