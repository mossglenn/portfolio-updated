'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

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
    <div className={cn('flex w-full grow justify-evenly', className)} style={style}>
      <div
        className={cn(
          'flex grow -skew-x-20 justify-center rounded-md bg-slate-light transition-colors duration-200',
          !isActive && 'hover:bg-accent',
          isActive && 'bg-gradient-muted'
        )}
      >
        <Link
          className={cn(
            'inline-block skew-x-20 px-4 py-2 text-sm font-bold transition-colors duration-200',
            isActive ? 'text-foreground-light' : 'text-foreground hover:text-card'
          )}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      </div>
    </div>
  )
}
