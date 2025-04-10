import { motion } from 'framer-motion'
import { ArrowRight, Bot, Brain, Gamepad2, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SkewTag } from '@/components/ui/skew-tag'
import { SkewedBox } from '@/components/ui/skewed-box'
import { useSkewOffset } from '@/hooks/use-skew-offset'

export function ProjectOne(): ReactElement {
  const { ref, offset, mounted, width } = useSkewOffset()
  const tags = [
    { label: 'Real-time Feedback', icon: Timer },
    { label: 'Gamified', icon: Gamepad2 },
    { label: 'Adaptive', icon: Bot },
    { label: 'Diagnose Misconceptions', icon: Brain },
  ]
  return (
    <Card className="@container">
      <CardContent className="p-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className=""
            style={
              mounted
                ? ({
                    '--offset': `${offset}px`,
                    '--box-width': `${width}px`,
                  } as React.CSSProperties)
                : ({ '--offset': '23px', '--box-width': '283px' } as React.CSSProperties)
            }
          >
            <SkewedBox
              className="ml-offset w-max rounded-b-none rounded-t-md bg-accent"
              innerClassName=" px-2 font-bold text-background"
            >
              F<span className="text-inherit-075">EATURED </span>P
              <span className="text-inherit-075">ROJECT</span>
            </SkewedBox>
            <SkewedBox ref={ref} className="pl-offset pr-offset w-max max-w-full bg-brand">
              <h1 className="font-display text-2xl font-bold">From Complex to Efficient</h1>
            </SkewedBox>
            <div
              className="mr-offset project-title-card mb-8 ml-[calc(var(--offset)-var(--offset)/2)] inline-block whitespace-normal rounded-b-md bg-slate-light px-4 py-2"
              style={{
                maxWidth: 'calc(var(--box-width) - var(--caption-max-adjust))',
              }}
            >
              <p className="text-accent">Gamified, Personalized Statistics Tutor</p>
            </div>
          </div>
          <div className="mx-auto block max-w-[300px] @md:pl-8 @lg:float-right">
            <Link href="/portfolio/gamified-adaptive-statistics-tutor">
              <Image
                alt="Animation of the Escape Room gamified statistics tutor highlighting a learner misconception."
                className="rounded-md object-contain py-4 pr-4"
                height={353}
                sizes="(min-width: 768px) 384px, 100vw"
                src="portfolio-images/escape-room-preview.gif"
                width={471}
              />
            </Link>
          </div>
          <p className="mb-4">
            They asked for a digital version of their paper-based content. I delivered a gamified,
            adaptive tutor that interactively corrected misconceptions — doing what static content
            never could.
          </p>

          <div>
            {}
            <p className="mb-4 py-4 font-display text-2xl font-bold leading-tight @md:text-2xl">
              Instead of digitizing the content, <br className="hidden" /> I{' '}
              <span className="text-gradient-lavender-light">
                reimagined the learning experience.
              </span>
            </p>
          </div>
          <p>
            Complex information became easier to learn through real-time feedback and personalized
            pathways that reinforced understanding and built confidence.
          </p>
          <div className="mx-auto block max-w-[300px] @lg:float-start @lg:pr-8">
            <Link href="/portfolio/gamified-adaptive-statistics-tutor">
              <Image
                alt="Animation of the Escape Room gamified statistics tutor highlighting a learner misconception."
                className="rounded-md object-contain py-4 pr-4"
                height={353}
                sizes="(min-width: 768px) 384px, 100vw"
                src="portfolio-images/adaptive-statistics-tutor.png"
                width={471}
              />
            </Link>
          </div>
          <div className="my-6 flex flex-wrap gap-2 text-xs font-medium text-foreground">
            {tags.map(({ label, icon }) => (
              <SkewTag key={label} icon={icon}>
                {label}
              </SkewTag>
            ))}
          </div>
          {}
          <div className="mt-4 flex flex-col justify-center gap-4 @sm:flex-row">
            <Button asChild className="text-base" size="lg" variant="secondary">
              <Link href="/work">
                Learn More <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
