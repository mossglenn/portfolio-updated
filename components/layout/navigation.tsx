'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'
import { ReactElement } from 'react'
import { Menu } from 'lucide-react'
import { LogoBadge } from '@components/ui/logo-badge'
import { SkewedNavLink } from '@components/ui/skewed-nav-link'
import { Container } from './container'

export default function Navigation(): ReactElement {
  const [scrolled, setScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    setCurrentPath(window.location.pathname)
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
            <div className="flex items-center text-primary">
              <LogoBadge backgroundColorClass="bg-secondary" />
              <div
                className="-ml-1 hidden animate-slide-out-left md:flex"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-max -skew-x-20 rounded-md bg-card px-4 py-1 text-sm shadow-md md:inline-block">
                  <div className="skew-x-20 text-card-foreground/70">
                    Learning Experience Architect
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="mr-0 hidden -skew-x-20 rounded-lg bg-card p-2 md:flex">
                {siteConfig.nav.map((item) => (
                  <div key={item.href} className="skew-x-20">
                    <SkewedNavLink key={item.href} href={item.href}>
                      {item.title}
                    </SkewedNavLink>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <div className="mr-1 w-max -skew-x-20 rounded-md border-2 border-secondary bg-card pl-1 text-sm shadow-md">
                      <div className="skew-x-20">
                        <Button variant="ghost" size="sm" className="mr-2 text-accent">
                          <Menu strokeWidth={3} className="ml-1" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </div>
                    </div>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[80vw] px-0 sm:w-[350px]">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 flex translate-x-8 flex-col space-y-6">
                      {siteConfig.nav.map((item, index) => (
                        <SkewedNavLink
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="animate-slide-in-right"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {item.title}
                        </SkewedNavLink>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
          <div className="flex align-middle">
            <div className="inline-block w-max -skew-x-20 rounded-md bg-card px-4 py-1 text-xs shadow-md md:hidden">
              <div className="skew-x-20 text-card-foreground/70">Learning Experience Architect</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
