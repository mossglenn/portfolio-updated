'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to check if a media query matches
 * @param query Media query string (e.g., "(min-width: 768px)")
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Set initial value
    setMatches(media.matches)

    // Update matches when the media query changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add event listener
    media.addEventListener('change', listener)

    // Clean up
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}
