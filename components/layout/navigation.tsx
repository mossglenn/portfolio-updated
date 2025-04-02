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
      className={`fixed inset-x-0 top-0 z-50 min-h-[72px] transition-all duration-300 ${
        scrolled ? 'bg-background/50 py-3 backdrop-blur-md backdrop-brightness-75' : 'py-6'
      }`}
    >
      <Container>
        <div className="flex flex-col gap-1">
          <nav className="mx-4 flex items-center justify-between">
            <div className="flex flex-wrap items-center">
              <LogoBadge backgroundColorClass="bg-brand" />
              <div
                className={`-ml-3 flex animate-slide-out-from-left ${scrolled ? 'animate-slide-out-to-left -mb-8 md:relative md:animate-none' : 'relative'}`}
              >
                <div className="inline-block w-max -skew-x-20 rounded-md bg-secondary px-4 py-1 text-sm shadow-md">
                  <div className="skew-x-20 text-foreground">Learning Experience Architect</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <NavigationDesktop />

              <NavigationMobile />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}
