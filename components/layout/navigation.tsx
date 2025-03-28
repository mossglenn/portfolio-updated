'use client'

import { useState, useEffect } from 'react'
import { ReactElement } from 'react'
import { LogoBadge } from '@components/ui/logo-badge'
import { Container } from '@components/layout/container'
import NavigationMobile from '@/components/layout/navigation-mobile'
import NavigationDesktop from '@/components/layout/navigation-desktop'
export default function Navigation(): ReactElement {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 py-3 backdrop-blur-md' : 'py-6'
      }`}
    >
      <Container>
        <div className="flex flex-col gap-1">
          <nav className="mx-4 flex items-center justify-between">
            <div className="text-primary flex items-center">
              <LogoBadge backgroundColorClass="bg-secondary" />
              <div
                className="animate-slide-out-left -ml-1 hidden md:flex"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-max -skew-x-20 rounded-md bg-card px-4 py-1 text-sm shadow-md md:inline-block">
                  <div className="text-card-foreground/70 skew-x-20">
                    Learning Experience Architect
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <NavigationDesktop />

              <NavigationMobile />
            </div>
          </nav>
          <div className="flex align-middle">
            <div className="inline-block w-max -skew-x-20 rounded-md bg-card px-4 py-1 text-xs shadow-md md:hidden">
              <div className="text-card-foreground/70 skew-x-20">Learning Experience Architect</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
