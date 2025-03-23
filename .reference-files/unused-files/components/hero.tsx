'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 size-96 -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 size-96 -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Innovative <span className="text-primary">Instructional Design</span> Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Creating cutting-edge, research-based learning experiences that bridge theory and
              practice for real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="px-8">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
