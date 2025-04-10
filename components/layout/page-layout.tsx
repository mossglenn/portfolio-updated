import { type ReactElement } from 'react'

import { Footer } from '@/components/layout/footer'
import Navigation from '@/components/layout/navigation'

import type React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: boolean
}

export function PageLayout({ children, header, footer = true }: PageLayoutProps): ReactElement {
  return (
    <div className="min-h-screen">
      {header || <Navigation />}
      <main className="pt-28">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
