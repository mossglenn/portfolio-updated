'use client'

import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const skewTag = tv({
  base: 'inline-block -skew-x-20 rounded-md px-3 py-1 transition-colors text-xs font-medium',
  variants: {
    variant: {
      default: 'bg-card-light text-foreground hover:bg-accent/80',
      accent: 'bg-accent text-accent-foreground hover:bg-accent-dark',
      ghost: 'bg-transparent text-foreground border border-input hover:bg-muted/50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface SkewTagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof skewTag> {
  icon?: React.ElementType
  children: React.ReactNode
  innerClassName?: string
}

export function SkewTag({
  icon: Icon,
  children,
  className,
  innerClassName = '',
  variant,
  ...props
}: SkewTagProps): React.ReactElement {
  return (
    <span className={cn(skewTag({ variant }), className)} {...props}>
      <span className={cn('inline-flex skew-x-20 items-center gap-1 align-middle', innerClassName)}>
        {Icon && <Icon aria-hidden="true" className="size-4" />} {children}
      </span>
    </span>
  )
}
