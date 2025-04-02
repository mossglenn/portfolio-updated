import { Card, CardContent } from '@/components/ui/card'
import { ReactElement } from 'react'

export function MainContentSection(): ReactElement {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="font-display mb-2 text-2xl font-bold md:text-3xl">
          When Training Doesn&apos;t Work:
        </h2>
        <div className="mb-6 flex -skew-x-20 rounded-md bg-brand py-2 pl-4 text-2xl font-bold md:text-3xl">
          <div className="font-display inline-block skew-x-20">The Hidden Problem</div>
        </div>

        <div className="0 mb-8 rounded-r-lg border-l-4 border-primary p-2">
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
          <p className="mb-4">
            People often find my question frustrating&mdash;especially when the request seems clear
            and straightforward. It can seem like a{' '}
            <span className="text-neutral">
              waste of time to pause and unpack <em>why</em>
            </span>{' '}
            learning is needed, rather than jumping straight to what the training should cover.
          </p>

          <p>
            But I ask the question to uncover a hidden problem with the request:{' '}
            <em>
              when we build training around content, we miss the opportunity to design solutions
            </em>
            .
          </p>

          {/* Pull quote for visual interest */}
          <div className="relative my-8">
            <blockquote className="font-display border-l-2 border-primary pl-8 text-2xl font-bold italic text-foreground">
              <span className="text-brand-light"> When we build training around content, </span>
              <span className="text-gradient-accent-light-vertical">
                we miss the opportunity to design solutions.
              </span>
            </blockquote>
          </div>

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
            focused learning activities, curate purposeful content, and build diagnostic assessments
            that lead to meaningful, lasting change.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
