'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to track scroll position
 * @returns Object with scroll position and whether the page has been scrolled
 */
export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setScrolled(window.scrollY > threshold)
    }

    // Set initial values
    handleScroll()

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return { scrolled, scrollY }
}
