// components/SkewedBoxContainer.tsx
'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'

interface SkewedBoxContainerProps {
  angle?: number
  defaultHeight?: number
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SkewedBoxContainer({
  angle = 20,
  defaultHeight = 40,
  children,
  className = '',
  style = {},
}: SkewedBoxContainerProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const radians = (angle * Math.PI) / 180

  // Estimate offset initially
  const [offset, setOffset] = useState(Math.tan(radians) * defaultHeight)

  useLayoutEffect(() => {
    if (!ref.current) return

    const update = () => {
      const height = ref.current!.getBoundingClientRect().height
      const skewOffset = Math.tan(radians) * height
      setOffset(skewOffset)
    }

    const observer = new ResizeObserver(update)
    observer.observe(ref.current)
    update()

    return () => observer.disconnect()
  }, [radians])

  return (
    <div
      ref={ref}
      className={`transition-[margin] duration-300 ease-in-out ${className}`}
      style={
        {
          '--offset': `${offset}px`,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

// Usage:
// <SkewedBoxContainer>
//   <SkewedBox className="ml-[var(--offset)]">...</SkewedBox>
//   <div className="ml-[var(--offset)]">Aligned content</div>
// </SkewedBoxContainer>
