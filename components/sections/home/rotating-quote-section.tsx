import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { type ReactElement } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { SkewedBox } from '@/components/ui/skewed-box'
import { testimonials } from '@/data/testamonials'

export default function RotatingQuoteCard(): ReactElement {
  const [index, setIndex] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const hiddenContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 9000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!hiddenContainerRef.current) return
    const children = Array.from(hiddenContainerRef.current.children)
    const heights = children.map((child) => (child as HTMLElement).offsetHeight)
    const tallest = Math.max(...heights)
    setMaxHeight(tallest)
  }, [])

  const quote = testimonials[index]

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Hidden pre-rendered quotes for height calculation */}
      <div
        ref={hiddenContainerRef}
        className="pointer-events-none absolute h-0 overflow-hidden opacity-0"
      >
        {testimonials.map((q) => (
          <div
            dangerouslySetInnerHTML={{ __html: `&quot;${q.text}&quot;` }}
            key={q.id}
            className="text-xl font-semibold italic"
          />
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6 text-center">
          <SkewedBox className="w-full bg-brand px-4 py-2 font-display text-lg font-bold">
            Testamonials
          </SkewedBox>
          <div className="relative" style={{ minHeight: maxHeight }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={quote.id}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                className="flex flex-col items-center justify-center"
                exit={{ opacity: 0, scale: 0.95, rotateX: 15 }}
                initial={{ opacity: 0, scale: 0.95, rotateX: -15 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${quote.category}&rdquo;` }}
                  className="text-lg font-medium text-muted"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${quote.text}&rdquo;` }}
                  className="text-xl font-semibold italic text-foreground"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-y-0 -left-8 flex items-center pl-2">
              <button className="transition-transform hover:scale-110" onClick={handlePrev}>
                <ChevronLeft className="size-6 text-muted" />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-8 flex items-center pr-2">
              <button className="transition-transform hover:scale-110" onClick={handleNext}>
                <ChevronRight className="size-6 text-muted" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
