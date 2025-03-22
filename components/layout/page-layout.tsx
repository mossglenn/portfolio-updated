import type React from 'react'
import Navigation from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

interface PageLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: boolean
}

export function PageLayout({ children, header, footer = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {header || <Navigation />}
      <main className="pt-24">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
