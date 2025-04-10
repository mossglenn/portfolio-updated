import { motion } from 'framer-motion'
import { Cpu, Microscope, Origami, PersonStanding } from 'lucide-react'
import { type ReactElement } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Iceberg } from '@/components/ui/iceberg-svg'
import { SkewTag } from '@/components/ui/skew-tag'
import { SkewedBox } from '@/components/ui/skewed-box'

export function MainContentSection(): ReactElement {
  const tags = [
    { label: 'Microlearning', icon: Microscope },
    { label: 'Design Thinking', icon: Origami },
    { label: 'Human-Centered Design', icon: PersonStanding },
    { label: 'Digital Learning', icon: Cpu },
  ]
  return (
    <Card className="@container">
      <CardContent className="p-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-display text-2xl font-bold md:text-3xl">
            When Training Doesn&apos;t Work:
          </h2>
          <div className="mb-6 flex -skew-x-20 rounded-md bg-brand py-2 pl-4 text-2xl font-bold md:text-3xl">
            <div className="inline-block skew-x-20 font-display">The Hidden Problem</div>
          </div>

          <div className="mb-8 rounded-r-lg border-l-4 border-brand p-2">
            <div className="mb-4 flex">
              <div className="text-xl text-foreground/90">You:</div>
              <div className="speech-bubble ml-8 rounded-2xl bg-slate-light px-4 py-2">
                <p className="text-foreground">We need a course on this topic.</p>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl text-foreground/90">Me:</div>
              <div className="speech-bubble ml-8 rounded-2xl bg-slate-light px-4 py-2">
                <p className="text-accent-light">What makes you think we need this course?</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden sm:float-right sm:block sm:pl-8">
              <div className="mx-auto mb-4 flex max-w-[400px] flex-col justify-center rounded-md bg-[hsl(var(--ice-layer-4))] pt-2 sm:ml-4 sm:max-w-[200px]">
                <SkewedBox className="mx-4 mb-4 bg-secondary px-4 text-center">
                  <p className="text-sm text-lavender-light">Instructional Design</p>
                  <p className="font-bold text-accent">Iceberg Illustion</p>
                </SkewedBox>

                <Iceberg />
              </div>
            </div>
            <p className="mb-4">
              People often find my question frustrating&mdash;especially when the request seems
              clear and straightforward. It can seem like a{' '}
              <span className="text-neutral">
                waste of time to pause and unpack <em>why</em>
              </span>{' '}
              learning is needed, rather than jumping straight to what the training should cover.
            </p>
            <div className="sm:hidden">
              <div className="mx-auto mb-4 flex max-w-[400px] flex-col justify-center rounded-md bg-[hsl(var(--ice-layer-4))] pt-2 sm:ml-4 sm:max-w-[200px]">
                <SkewedBox className="mx-4 mb-4 bg-secondary px-4 text-center">
                  <p className="text-sm text-lavender-light">Instructional Design</p>
                  <p className="font-bold text-accent">Iceberg Illustion</p>
                </SkewedBox>

                <Iceberg />
              </div>
            </div>
            <p>
              But I ask the question to uncover a hidden problem with the request:{' '}
              <em>
                when we build training around content, we miss the opportunity to design solutions
              </em>
              .
            </p>
            <div className="relative my-8">
              <blockquote className="border-l-2 border-brand pl-8 font-display text-2xl font-bold italic text-foreground">
                <span className="text-brand-light"> When we build training around content, </span>
                <span className="text-gradient-accent-light-vertical">
                  we miss the opportunity to design solutions.
                </span>
              </blockquote>
            </div>

            {/* Pull quote for visual interest */}

            <p className="mb-4">
              Courses built around a topic often fall short&mdash;not because the content is wrong,
              but because they skip a critical step: defining the specific problem the learning is
              meant to solve. That problem isn&apos;t about what information the course should
              cover&mdash;
              <span className="text-neutral">
                it&apos;s about what <b>you</b> want learners to be able to do that they can&apos;t
                already, and why that matters to <b>them</b>.
              </span>
            </p>

            <p>
              Once we&apos;re designing solutions, everything else falls into place. We can create
              focused learning activities, curate purposeful content, and build diagnostic
              assessments that lead to meaningful, lasting change.
            </p>
            <div className="mt-8">
              <SkewedBox className="mx-auto mb-4 bg-brand-darker px-4 py-2 text-center">
                <p className="text-neutral">
                  See this in action by exploring my work tagged with these keyterms:
                </p>
              </SkewedBox>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-foreground">
                {tags.map(({ label, icon }) => (
                  <SkewTag key={label} icon={icon}>
                    {label}
                  </SkewTag>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
