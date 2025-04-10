'use client'
import {
  ArrowRightLeft,
  Brain,
  Construction,
  Gamepad2,
  Gem,
  Link2,
  MessageSquareReply,
  MessagesSquare,
  Microscope,
  Puzzle,
  Rocket,
  ToggleRight,
  TrendingUp,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Container } from '@/components/layout/container'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { SkewedBox } from '@/components/ui/skewed-box'

/* 
route: portfolio/gamified-adaptive-statistics-tutor

This portfolio entry demonstrates my expertise in designing engaging, adaptive learning experiences 
that blend instructional rigor with innovative game mechanics. 
By featuring it in my portfolio, I highlight:

✅ **Gamified and scenario-based instructional design expertise**  
✅ **Proficiency in real-time adaptive learning and SCORM-compliant course development**  
✅ **Ability to create interactive, data-driven learning solutions for complex subjects**  
✅ **Commitment to making quantitative subjects more accessible and engaging for diverse learners**

This case study pairs well with my **Digital Literacy and Researcher Ethics Training**, 
showcasing my ability to design interactive, problem-based instructional solutions that promote deep learning.
 */

export default function GamifiedStatisticsTutor(): ReactElement {
  return (
    <PageLayout>
      <Container>
        <Section className="space-y-8">
          <div>
            <h1 className="my-4 font-display text-3xl font-bold sm:text-4xl">
              From Frustration to Confidence:
            </h1>
            <h1 className="mb-8 font-display text-2xl font-bold text-brand-light sm:text-3xl">
              A <span className="text-lavender-light">Gamified</span>,{' '}
              <span className="text-lavender-light">Adaptive</span> Approach to Complex Learning
            </h1>
            <SkewedBox className="mb-8 bg-brand">
              <p className="px-6 py-2 text-lg font-bold sm:text-xl">
                Gamified and Personalized Statistics Tutor
              </p>
            </SkewedBox>
            <Card className="mb-6">
              <CardContent>
                <Accordion collapsible type="single">
                  <AccordionItem value="toc">
                    <AccordionTrigger>Table of Contents</AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-4 space-y-2">
                        <li>
                          <Link href="#design-challenge">
                            <Link2 className="mr-2 inline-block size-4" />
                            Design Challenge
                          </Link>
                        </li>
                        <li>
                          <Link href="#design-solution">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Design Solution
                          </Link>
                        </li>
                        <li>
                          <Link href="#escape-room">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Escape Room
                          </Link>
                        </li>
                        <li>
                          <Link href="#treasure-hunt">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Treasure Hunt
                          </Link>
                        </li>
                        <li>
                          <Link href="#efficient-learning">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Efficient Learning
                          </Link>
                        </li>
                        <li>
                          <Link href="#personalized-feedback">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Personalized Feedback
                          </Link>
                        </li>
                        <li>
                          <Link href="#my-role">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            My Role
                          </Link>
                        </li>
                        <li>
                          <Link href="#results-impact">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Results & Impact
                          </Link>
                        </li>
                        <li>
                          <Link href="#key-takeaways">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Key Takeaways
                          </Link>
                        </li>
                        <li>
                          <Link href="#project-meta">
                            {' '}
                            <Link2 className="mr-2 inline-block size-4" />
                            Project Meta
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            <Card className="border-brand-light">
              <CardContent>
                <h2
                  className="my-4 font-display text-2xl font-bold text-accent"
                  id="project-overview"
                >
                  Project Overview
                </h2>
                <div className="my-6 -ml-4 flex flex-row align-middle font-display font-bold text-accent-softer">
                  <Construction className="mr-4 inline" />
                  Design Challenge
                </div>
                <div>
                  When the <span className="text-accent">topic is complex</span> and{' '}
                  <span className="text-accent">solutions require multiple steps</span>, a single
                  mistake can send learners down the wrong path with no way to recover. Traditional
                  practice activities offer no immediate help when learners get stuck and
                  frustrated.
                </div>
                <div className="my-6 mt-8 flex align-middle font-display font-bold text-accent-softer">
                  <div className="-ml-4 mr-4 size-5">
                    <Image
                      alt="trophy icon"
                      height={24}
                      src="/icons/trophy-filled.svg"
                      width={24}
                    />
                  </div>
                  Design Solution
                </div>
                <div>
                  <p className="mb-2">
                    This project introduced an{' '}
                    <span className="text-accent">adaptive, game&ndash;based tutor</span> that
                  </p>
                  <ul className="mb-2 ml-10 space-y-2">
                    <li>
                      <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                      identified misconceptions in{' '}
                      <span className="font-bold text-lavender-light">real time</span>,
                    </li>
                    <li>
                      <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                      provided <span className="font-bold text-lavender-light">targeted hints</span>
                      , and
                    </li>
                    <li>
                      <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                      <span className="font-bold text-lavender-light">adjusted feedback</span> based
                      on the learner&apos;s needs
                    </li>
                  </ul>
                  <p className="mt-6">
                    Learners <span className="text-accent">stayed engaged</span> while developing
                    both <span className="text-accent">mastery and confidence</span> in
                    problem&ndash;solving.
                  </p>
                </div>
              </CardContent>
            </Card>
            <p className="mb-2" />
          </div>
          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="design-challenge">
                Background & Design Challenge
              </h2>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-light">
                Moving Learning Online Creates an Opportunity
              </h2>
              <p className="mb-4">
                In the Institute for Clinical Research Education&apos;s (ICRE) Biostatistics course,
                students are assigned problem sets to practice applying what they learn. When the
                ICRE moved its Biostatistics course online, it created an opportunity to go beyond
                simply digitizing assignments.
              </p>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-light">
                Confused Learners Don&apos;t Improve
              </h2>
              <p className="mb-4">
                Traditional problem sets often fail to capture learners&apos; interest and provide
                no guidance when students struggle with complex, multi-step problems. This raised a
                critical question:
              </p>
              <p className="mb-4 font-bold text-accent">
                How can we reduce frustration by helping learners identify their mistakes right
                away, before the misconception that caused the error is abscured by componding
                steps?
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="design-solution">
                Solution & Design Approach
              </h2>
              <p className="mb-4">
                To address this challenge, I designed an interactive, gamified statistics tutor as
                part of the ICRE&apos;s online Biostatistics course.
              </p>
              <p>This system improved on the traditional problem sets in two ways:</p>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-light">
                1) Adaptive Learning Paths
              </h2>
              <div className="float-right my-6 ml-4">
                <Image
                  alt="Learning Paths"
                  height={100}
                  src="/portfolio-images/gamified-statistics-tutor/learning-path.svg"
                  width={100}
                />
              </div>
              <p className="mb-4">
                The system changed how problems were presented based on the learner&apos;s
                responses. When a learner struggled, the tutor broke the problem down into single
                steps and helped the learner identify the causes of continuing errors before moving
                on to later steps.
              </p>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-light">
                2) Gamified Interactivity
              </h2>
              <div className="float-right my-6 ml-4">
                <Image
                  alt="Learning Paths"
                  height={100}
                  src="/portfolio-images/gamified-statistics-tutor/magic-book-brand-light.png"
                  width={100}
                />
              </div>
              <p className="mb-4">
                The system used game mechanics to engage the learner in a fun story with stakes
                beyond a correct answer. Hints and feedback not only supported learning the
                necessary skills, but advanced the plot based on the learner&apos;s actions.
              </p>
              <p className="mb-4 font-bold text-accent">
                While engaging learners with game mechanics, the tutor used their responses to adapt
                each problem in real time to the learner&apos;s current skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="escape-room">
                Escape Room Challenge
              </h2>
              <p className="mb-4">
                In this scenario, the statistics students find themselves{' '}
                <span className="font-bold text-lavender-light">
                  locked in a room by an evil professor.
                </span>{' '}
                The code to unlock the door is hidden in a complex, multi-step problem&mdash;a
                conditional probablility problem in this case.
              </p>
              <div className="my-6">
                <Image
                  alt="Learning Paths"
                  height={300}
                  src="/portfolio-images/gamified-statistics-tutor/escaperoom.PNG"
                  width={300}
                />
              </div>
              <p className="mb-4">
                If the learner knows how to solve the problem, they can escape right away. Incorrect
                guesses causes the game to:
              </p>
              <ul className="mb-6 ml-10 space-y-4">
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  focus the learner on one step of the process,{' '}
                </li>
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  offer hints to scaffold new learning, and
                </li>
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  diagnose common misconceptions that causes errors.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="treasure-hunt">
                Treasure Hunt Adventure
              </h2>
              <div className="my-6">
                <Image
                  alt="Learning Paths"
                  height={300}
                  src="/portfolio-images/gamified-statistics-tutor/interactive_5.PNG"
                  width={300}
                />
              </div>
              <p className="mb-4">
                This activity reframed complex problems as a treasure hunt, where each step&apos;s
                solution held the map coordinates for the next clue. The game guided learners
                through increasingly complex problems (probability problems in this case). The game
                mechanics accomplished several things:
              </p>
              <ul className="mb-6 ml-10 space-y-4">
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  helped the learner stay engaged across many steps
                </li>
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  allowing them to track progress and make real-time corrections
                </li>
                <li>
                  <ToggleRight className="-ml-8 mr-2 inline-block size-5" />
                  provide hints when learners were feeling stuck or frustrated.
                </li>
              </ul>
              <div className="my-6">
                <Image
                  alt="Learning Paths"
                  height={300}
                  src="/portfolio-images/gamified-statistics-tutor/interactive_4.PNG"
                  width={300}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2
                className="mb-6 mt-4 font-display text-xl font-bold text-accent"
                id="efficient-learning"
              >
                Efficient Learning
              </h2>
              <p className="mb-4">
                A key challenge in complex problem-solving is the potential for multiple failure
                points across dozens of steps.
              </p>
              <p className="mb-4">This system prevented unnecessary frustration by:</p>
              <ul className="mb-6 ml-8 space-y-4">
                <li>
                  <Gem className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  <span className="font-bold text-lavender-light">
                    Identifying specific mistakes
                  </span>{' '}
                  so learners don&apos;t have to review concepts they already understand.
                </li>
                <li>
                  <Gem className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  Allowing learners to &ldquo;escape&rdquo; a problem{' '}
                  <span className="font-bold text-lavender-light">
                    as soon as they demonstrated mastery
                  </span>{' '}
                  reduces unnessesary work.
                </li>
                <li>
                  <Gem className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  Adapting the depth of instruction{' '}
                  <span className="font-bold text-lavender-light">
                    based on the complexity of the learner&apos;s error.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2
                className="mb-6 mt-4 font-display text-xl font-bold text-accent"
                id="personalized-feedback"
              >
                Personalized, Adaptive Feedback
              </h2>
              <p className="mb-4">
                The SCORM-compliant tutor analyzed every learner input and{' '}
                <span className="font-bold text-accent">
                  provided customized feedback based on response patterns:
                </span>
              </p>
              <ul className="mb-6 ml-8 space-y-4">
                <li>
                  <Puzzle className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  If an <span className="font-bold text-lavender-light">incorrect answer</span> was
                  given, the tutor explained why it was incorrect.
                </li>
                <li>
                  <Puzzle className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  If the system detected{' '}
                  <span className="font-bold text-lavender-light">recurring mistakes</span>, it
                  addressed likely misconceptions causing errors.
                </li>
                <li>
                  <Puzzle className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  Learners received step-by-step breakdowns of the problem-solving process{' '}
                  <span className="font-bold text-lavender-light">only when needed</span>, ensuring
                  efficient use of time.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="my-role">
                My Role
              </h2>

              <ul className="mb-6 ml-8 space-y-4">
                <li>
                  <MessagesSquare className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  <span className="font-bold text-lavender-light">Worked with SMEs</span> to break
                  problem sets into knowledge component-based steps
                </li>
                <li>
                  <Rocket className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  <span className="font-bold text-lavender-light">Designed and developed</span> an
                  interactive, SCORM-compliant learning system
                </li>
                <li>
                  <ArrowRightLeft className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  <span className="font-bold text-lavender-light">
                    Implemented real-time, adaptive feedback
                  </span>{' '}
                  based on learner inputs
                </li>
                <li>
                  <Gamepad2 className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  <span className="font-bold text-lavender-light">
                    Integrated gamification
                  </span>{' '}
                  elements to improve engagement and motivation{' '}
                </li>
                <li>
                  <Microscope className="-ml-8 mr-2 inline-block size-5 text-lavender-light" />
                  Aligned instructional strategies with{' '}
                  <span className="font-bold text-lavender-light">
                    research-backed principles
                  </span>{' '}
                  of learning
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="results-impact">
                Results & Impact
              </h2>
              <ul className="mb-6 ml-8 space-y-4">
                <li>
                  <TrendingUp className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">Increased learner engagement</span> by
                  incorporating interactive storytelling and game mechanics.
                </li>
                <li>
                  <TrendingUp className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">Improved problem-solving efficiency</span>
                  , reducing frustration while maintaining conceptual rigor.
                </li>
                <li>
                  <TrendingUp className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">Enhanced adaptive feedback</span>,
                  ensuring students received real-time, targeted support to correct misconceptions.
                </li>
                <li>
                  <TrendingUp className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">More effective skill mastery,</span>{' '}
                  allowing students to move through learning objectives efficiently while ensuring
                  robust understanding.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="my-4 font-display text-2xl font-bold" id="key-takeaways">
                Key Takeaways
              </h2>
              <ul className="mb-6 ml-8 space-y-4 text-lg">
                <li>
                  <Gamepad2 className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">Gamification</span> enhances learner
                  motivation while reinforcing complex problem-solving skills.
                </li>
                <li>
                  <MessageSquareReply className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">Adaptive feedback</span> ensures targeted,
                  real-time learning support tailored to individual errors.
                </li>
                <li>
                  <Brain className="-ml-8 mr-2 inline-block size-6 text-accent" />
                  <span className="font-bold text-accent">
                    Personalized instructional design
                  </span>{' '}
                  optimizes efficiency, preventing unnecessary cognitive overload.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="mt-4">
              <div id="project-meta">
                <dl className="grid grid-cols-[max-content_1fr] gap-4 text-sm">
                  <dt className="text-right font-semibold">Category:</dt>
                  <dd>Learning through Games and Play</dd>

                  <dt className="text-right font-semibold">Role:</dt>
                  <dd>Instructional Designer</dd>

                  <dt className="text-right font-semibold">Partners:</dt>
                  <dd>Institute for Clinical Research Education</dd>

                  <dt className="text-right font-semibold">Audience:</dt>
                  <dd>Graduate-level Students enrolled in the online Biostatistics course</dd>

                  <dt className="text-right font-semibold">Tags:</dt>
                  <dd>
                    <div className="flex flex-wrap gap-1">
                      {[
                        'Gamification',
                        'Personalization',
                        'Adaptive Learning',
                        'Engagement',
                        'STEM',
                      ].map((tag) => (
                        <span key={tag} className="rounded-full bg-card-light px-2 py-0.5 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </dd>
                </dl>
              </div>
            </CardContent>
          </Card>
        </Section>
      </Container>
    </PageLayout>
  )
}
