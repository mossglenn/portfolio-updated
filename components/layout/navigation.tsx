'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 py-3 backdrop-blur-md' : 'py-6'}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground">
            <span className="gradient-text-ochre">{siteConfig.name}</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="mr-4 hidden items-center gap-2 rounded-full bg-muted/70 px-1 py-1 backdrop-blur-sm md:flex">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${currentPath === item.href ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
