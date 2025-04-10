'use client'

import { motion } from 'framer-motion'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function HeroTest(): ReactElement {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Text */}
          <div className="w-full text-balance text-left font-display md:my-8" title="hero-text">
            <h2 className="mt-2 pb-2 text-[clamp(1.5rem,7.5vw,2.5rem)] leading-none text-foreground/80">
              I don&apos;t build courses.
            </h2>
            <h1 className="text-md-squish mt-2 max-w-full text-[clamp(1.25rem,8vw,3.5rem)] font-bold leading-none">
              <span className="text-inherit-085">I</span>{' '}
              <span className="text-gradient-accent-lighter-left font-black">design solutions</span>
            </h1>
            <h2 className="text-md-squish-subtext text-[clamp(1.5rem,7vw,3rem)] font-bold md:pr-8 md:text-right">
              that make a difference.
            </h2>
          </div>

          {/* Subtext */}
          <div title="subtext-content">
            <p className="mb-4 text-lg leading-snug text-foreground-lavender md:text-xl lg:mb-8 lg:text-2xl">
              I lead cross-functional teams <br className="hidden lg:block" />
              to help organizations{' '}
              <span className="font-semibold text-foreground-light">
                translate goals into effective learning experiences
              </span>{' '}
              that improve how people think, work, and grow.
            </p>

            {/* Diagram Arrows */}
            <div className="mb-6 hidden grow flex-nowrap items-center pr-4 text-xs">
              <div className="flex flex-nowrap items-center">
                <div className="-mr-1 -skew-x-20 rounded-md border-2 border-brand bg-secondary p-2 text-center">
                  <div className="inline-block skew-x-20 text-neutral">Program Goals</div>
                </div>
                <ArrowBigRight aria-label="Arrow pointing right" />
              </div>
              <div className="flex flex-nowrap items-center">
                <div className="-mr-1 -skew-x-20 rounded-md border-2 border-slate-light bg-slate-light p-2 text-center">
                  <div className="inline-block skew-x-20 text-neutral">Learning Experiences</div>
                </div>
                <ArrowBigRight aria-label="Arrow pointing right" />
              </div>
              <div>
                <div className="-skew-x-20 rounded-md border-2 border-accent bg-slate-light p-2 text-center">
                  <div className="inline-block skew-x-20 text-neutral">Measurable Impact</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="order-3 md:col-span-2 md:row-start-2">
            <div
              className="flex flex-col gap-4 sm:flex-row md:-ml-12 md:justify-center"
              title="cta-buttons"
            >
              <Button asChild size="lg">
                <Link href="/work">
                  View my work <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="hover:bg-gradient-card-background transition-colors duration-300"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
