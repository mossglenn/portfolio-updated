'use client'

import Link from 'next/link'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ReactElement } from 'react'

export function HeroSection(): ReactElement {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-end justify-between">
            <div className="mb-6 basis-full text-left lg:basis-2/3">
              <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,2.5rem)] text-foreground/80">
                I don&apos;t build courses.
              </h2>
              <h1 className="mt-2 text-[clamp(1.25rem,8vw,3.5rem)] font-bold">
                I{' '}
                <span className="text-gradient-accent-lighter-left text-inherit-115 font-black">
                  design solutions
                </span>
              </h1>
              <h2 className="text-[clamp(1.5rem,7vw,3rem)] font-bold">that make a difference.</h2>
            </div>
            <div className="basis-full lg:basis-1/3">
              {/* eslint-disable-next-line tailwindcss/classnames-order */}
              <p className="text-foreground-lavender mb-10 text-base md:text-lg lg:text-xl">
                I lead cross-functional teams
                <br className="hidden lg:block" />
                to help organizations{' '}
                <span className="font-semibold text-foreground-light">
                  translate goals into effective learning experiences
                </span>{' '}
                that improve how people think, work, and grow.
              </p>
              <div className="mb-6 hidden grow flex-nowrap items-center pr-4 text-xs lg:flex">
                <div className="flex flex-nowrap items-center">
                  <div className="-mr-1 -skew-x-20 rounded-md border-2 border-brand bg-slate-light p-2 text-center">
                    <div className="inline-block skew-x-20 text-neutral">Program Goals</div>
                  </div>
                  <ArrowBigRight />
                </div>
                <div className="flex flex-nowrap items-center">
                  <div className="-mr-1 -skew-x-20 rounded-md border-2 border-slate-light bg-slate-light p-2 text-center">
                    <div className="inline-block skew-x-20 text-neutral">Learning Experiences</div>
                  </div>
                  <ArrowBigRight />
                </div>
                <div>
                  <div className="-skew-x-20 rounded-md border-2 border-accent bg-slate-light p-2 text-center">
                    <div className="inline-block skew-x-20 text-neutral">Measurable Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/work">
                View my work <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover:bg-gradient-card-background transition-colors duration-300"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
