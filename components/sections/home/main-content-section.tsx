import { Card, CardContent } from '@/components/ui/card_OLD'
import { ReactElement } from 'react'

export function MainContentSection(): ReactElement {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          When Training Doesn&apos;t Work:{' '}
          <span className="gradient-text-slate">The Hidden Problem</span>
        </h2>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="mb-8 rounded-r-lg border-l-4 border-primary bg-muted/80 p-6 backdrop-blur-sm">
            <p className="text-xl italic text-foreground/90">
              You: <em className="text-accent">&quot;We need a course on this topic.&quot;</em>
              <br />
              Me:{' '}
              <em className="gradient-text-ochre">
                &quot;What makes you think we need this course?&quot;
              </em>
            </p>
          </div>

          <p>
            People often find my question frustrating&mdash;especially when the request seems clear
            and straightforward. It can seem like a waste of time to pause and unpack <em>why</em>{' '}
            learning is needed, rather than jumping straight to what the training should cover.
          </p>

          <p>
            But I ask the question to uncover a hidden problem with the request:{' '}
            <em>
              when we build training around content, we miss the{' '}
              <span className="gradient-text-slate">opportunity</span> to design solutions
            </em>
            .
          </p>

          {/* Pull quote for visual interest */}
          <div className="relative my-8">
            <div className="absolute -left-8 top-0 font-serif text-6xl text-primary/20">&quot;</div>
            <blockquote className="border-l-2 border-primary pl-8 text-2xl font-medium italic text-foreground">
              When we build training around content, we miss the opportunity to design{' '}
              <span className="gradient-text-sage">solutions</span>.
            </blockquote>
          </div>

          <p>
            Courses built around a topic often fall short&mdash;not because the content is wrong,
            but because they skip a critical step: defining the specific problem the learning is
            meant to solve&mdash;what you want learners to know and be able to do that they
            can&apos;t already, and why those outcomes matter to them.
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
