import { type ReactElement } from 'react'

import { cn } from '@/lib/utils'

import type React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function Section({ children, className, title, description }: SectionProps): ReactElement {
  return (
    <section className={cn('py-6', className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && <p className="text-foreground">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
