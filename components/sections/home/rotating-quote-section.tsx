import { useEffect, useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/data/testamonials'
import { AnimatePresence, motion } from 'framer-motion'
import { SkewedBox } from '@/components/ui/skewed-box'
import { ReactElement } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
        className="pointer-events-none absolute h-0 overflow-hidden opacity-0"
        ref={hiddenContainerRef}
      >
        {testimonials.map((q) => (
          <div
            key={q.id}
            className="text-xl font-semibold italic"
            dangerouslySetInnerHTML={{ __html: `&quot;${q.text}&quot;` }}
          />
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6 text-center">
          <SkewedBox className="font-display w-full bg-brand px-4 py-2 text-lg font-bold">
            Testamonials
          </SkewedBox>
          <div style={{ minHeight: maxHeight }} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, scale: 0.95, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateX: 15 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className="text-lg font-medium text-muted"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${quote.category}&rdquo;` }}
                ></div>
                <div
                  className="text-xl font-semibold italic text-foreground"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${quote.text}&rdquo;` }}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-y-0 -left-8 flex items-center pl-2">
              <button onClick={handlePrev} className="transition-transform hover:scale-110">
                <ChevronLeft className="size-6 text-muted" />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-8 flex items-center pr-2">
              <button onClick={handleNext} className="transition-transform hover:scale-110">
                <ChevronRight className="size-6 text-muted" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
