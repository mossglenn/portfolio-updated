'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SkewedNavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function SkewedNavLink({
  href,
  children,
  onClick,
  className,
  style,
}: SkewedNavLinkProps): React.ReactElement {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <div className={cn('w-full', className)} style={style}>
      <div
        className={cn(
          '-skew-x-20 rounded-md bg-card transition-colors duration-200',
          !isActive && 'hover:bg-background',
          isActive && 'bg-primary text-secondary'
        )}
      >
        <Link
          href={href}
          onClick={onClick}
          className={cn(
            'inline-block skew-x-20 px-4 py-2 text-sm font-bold transition-colors duration-200',
            isActive ? 'text-secondary' : 'text-foreground/60 hover:text-foreground'
          )}
        >
          {children}
        </Link>
      </div>
    </div>
  )
}
