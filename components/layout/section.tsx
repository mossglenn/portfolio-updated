import type React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function Section({ children, className, title, description }: SectionProps) {
  return (
    <section className={cn('py-12', className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
