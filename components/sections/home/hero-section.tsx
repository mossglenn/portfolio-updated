'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function HeroSection() {
  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I'm <span className="gradient-text-ochre">Amos Glenn</span>.
            </h1>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I <span className="gradient-text-slate">don't build</span> courses.
            </h1>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I <span className="gradient-text-ochre">design solutions</span> that make a
              difference.
            </h1>
          </div>
          <p className="mb-8 text-xl text-muted-foreground">
            I lead cross-functional teams to help organizations translate goals into effective
            learning experiences that improve how people{' '}
            <span className="gradient-text-sage">think</span>,{' '}
            <span className="gradient-text-ochre">work</span>, and grow.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/work">
                View my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
