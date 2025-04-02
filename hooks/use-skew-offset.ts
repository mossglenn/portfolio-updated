import { useEffect, useLayoutEffect, useRef, useState } from 'react'
type SkewOffsetHook = {
  ref: React.RefObject<HTMLDivElement>
  offset: number
  mounted: boolean
  width: number
}

export function useSkewOffset(angle: number = 20): SkewOffsetHook {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    if (!mounted || !ref.current) return

    const element = ref.current
    const radians = (angle * Math.PI) / 180

    const update = () => {
      const rect = element.getBoundingClientRect()
      const height = rect.height
      const skewOffset = Math.tan(radians) * height
      setOffset(skewOffset)
      setWidth(rect.width)
    }

    const observer = new ResizeObserver(update)
    observer.observe(element)
    update()

    return () => observer.disconnect()
  }, [angle, mounted])

  return { ref, offset, mounted, width }
}
