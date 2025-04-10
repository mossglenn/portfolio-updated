'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { ReactElement } from 'react'

export default function Testamonials(): ReactElement {
  return (
    <PageLayout>
      <Container>
        <Section className="space-y-12">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold">Top All-Around Endorsements</h2>
              <div>
                &quot;Amos&apos;s exceptional work is well known throughout the NNLM and AoU
                universe.&quot;
              </div>
              <div>
                &quot;Amos continues to be a very important part of the HSLS TEC team, is both a
                hard worker and a supportive team member, and contributes much to the TEC&apos;s
                continued success.&quot;
              </div>
              <div>
                &quot;His experience, expertise and insights are important to our continued
                success.&quot;
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Leadership &amp; Strategy</h2>
              <div>
                &quot;Amos has grown new skills this year to support his role as Instructional
                Design Manager, including admin/developer-level knowledge of Absorb LMS and earning
                a consulting certificate from ATD.&quot;
              </div>
              <div>
                &quot;He regularly evaluates new products to identify opportunities for enhancing
                development, including tools for learning experience design and project
                management.&quot;
              </div>
              <div>
                &quot;Amos has a strong history of initiating action to solve challenges both
                internal and external, and stepping in to provide leadership where there may be a
                void.&quot;
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Instructional Design Expertise</h2>
              <div>
                &quot;Teaches/explains education and instructional design theory to internal
                colleagues as well as external partners.&quot;
              </div>
              <div>
                &quot;Amos&rsquo;s curricular design, instructional design and development work is
                consistently of high quality and meets&mdash;but usually exceeds&mdash;the
                projects&apos; established goals and outcomes.&quot;
              </div>
              <div>
                &quot;When working with NIH scientists, NNLM leadership and others who know little
                about learning theory... Amos never fails to present a positive disposition and
                maintains constructive communication under pressure.&quot;
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Problem-Solving &amp; Initiative</h2>
              <div>
                &quot;Even when work is ambiguous or expectations are unclear, Amos listens and
                maintains diplomacy... keeps the goal in mind to deliver a product that meets the
                desired audience.&quot;
              </div>
              <div>
                &quot;An example of Amos&apos;s ability to initiate action to create improvement...
                is his work envisioning, planning and leading the National Training Round-table
                sessions.&quot;
              </div>
              <div>
                &quot;He regularly seeks opportunities to improve our organizational operations and
                identify short- and long-term needs for growth.&quot;
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Collaboration &amp; Mentorship</h2>
              <div>
                &quot;A generous team member who will jump in when needed&mdash;whether that be
                helping to articulate information, assist a colleague, or provide a &#39;fresh
                eyes&#39; point of view.&quot;
              </div>
              <div>
                &quot;Supports the ID team through the development process by consulting about the
                scope, design, content, and other aspects of training development.&quot;
              </div>
              <div>
                &quot;Amos is flexible in supporting the needs of our program and his colleagues as
                they shift, while cultivating the long-term outlook for growth.&quot;
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Values &amp; Inclusion</h2>
              <div>
                &quot;Amos actively supports our workplace culture that values diversity, equity and
                inclusion. He utilizes inclusive methodologies for product development including 508
                compliance.&quot;
              </div>
              <div>
                &quot;Supported the All of Us Racial Equity Consciousness Institute and led breakout
                discussions for several live learning sessions.&quot;
              </div>
            </CardContent>
          </Card>
        </Section>
      </Container>
    </PageLayout>
  )
}
