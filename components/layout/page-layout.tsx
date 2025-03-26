import type React from 'react'
import Navigation from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { ReactElement } from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: boolean
}

export function PageLayout({ children, header, footer = true }: PageLayoutProps): ReactElement {
  return (
    <div className="min-h-screen">
      {header || <Navigation />}
      <main className="pt-16">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
