import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SkewedBox } from '@/components/ui/skew-box'
import { ArrowRight, Bot, Brain, Gamepad2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

export function ProjectOne(): ReactElement {
  return (
    <Card className="@container">
      <CardContent className="p-6">
        <div className="@container">
          <div className="@md:text-xl -mb-1 ml-4 w-max -skew-x-20 rounded-md bg-accent px-6 text-sm">
            <div className="inline-block skew-x-20 py-1 font-bold tracking-normal text-background">
              F<span className="text-inherit-075">EATURED </span>P
              <span className="text-inherit-075">ROJECT</span>
            </div>
          </div>
          <SkewedBox className="bg-brand">
            <h1>From Complex to Efficient</h1>
          </SkewedBox>

          <div className="rounded-md bg-slate-light px-4 py-2">
            <p className="text-lg font-bold">Gamified and Personalized Statistics Tutor</p>
          </div>
        </div>

        <p className="font-display @md:text-2xl mb-4 text-2xl font-bold leading-tight">
          Instead of digitizing the content, <br className="hidden" /> I{' '}
          <span className="text-gradient-playful">reimagined the learning experience.</span>
        </p>
        <div className="@md:flex-row flex flex-col gap-4">
          <div className="max-w-sm">
            <Link href="/work">
              <Image
                src="portfolio-images/escape-room-preview.gif"
                alt="Animation of the Escape Room gamified statistics tutor highlighting a learner misconception."
                className="rounded-md object-contain py-4 pr-4"
                width={471}
                height={353}
                sizes="(min-width: 768px) 384px, 100vw"
              />
            </Link>
          </div>
          <div className="flex-1">
            <div className="mb-6 flex flex-wrap gap-2 text-sm font-medium text-foreground">
              <span className="bg-card-light -skew-x-20 rounded px-3 py-1">
                <span className="inline-flex skew-x-20 items-center gap-1">
                  <Gamepad2 className="size-4" /> Gamified
                </span>
              </span>
              <span className="bg-card-light -skew-x-20 rounded px-3 py-1">
                <span className="inline-flex skew-x-20 items-center gap-1">
                  <Bot className="size-4" /> Adaptive
                </span>
              </span>
              <span className="bg-card-light -skew-x-20 rounded px-3 py-1">
                <span className="inline-flex skew-x-20 items-center gap-1">
                  <Brain className="size-4" /> Misconception Correction
                </span>
              </span>
            </div>
            <div>
              <p className="mb-4">
                They asked for a digital version of their paper-based content. I delivered a
                gamified, adaptive tutor that interactively corrected misconceptions — doing what
                static content never could. Complex information became easier to learn through
                real-time feedback and personalized pathways that reinforced understanding and built
                confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="@sm:flex-row mt-4 flex flex-col justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-base" asChild>
            <Link href="/work">
              Learn More <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
