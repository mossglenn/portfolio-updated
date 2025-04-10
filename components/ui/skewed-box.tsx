'use client'

import React, { forwardRef } from 'react'

import { cn } from '@/lib/utils'

type SkewedBoxProps = {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  onOffsetChange?: (offset: number) => void
}

export const SkewedBox = forwardRef<HTMLDivElement, SkewedBoxProps>(
  ({ children, className = '', innerClassName = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(`relative inline-block -skew-x-20 rounded-md`, className)}
        {...props}
      >
        <div className={cn(`skew-x-20`, innerClassName)}>{children}</div>
      </div>
    )
  }
)
SkewedBox.displayName = 'SkewedBox'
