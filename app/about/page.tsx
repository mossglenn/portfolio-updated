'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

import { GradientText } from '@/components/common/gradient-text'
import { Container } from '@/components/layout/container'
import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'

import type { ReactElement } from 'react'

export default function AboutPage(): ReactElement {
  return (
    <PageLayout>
      <Container>
        {/* About Header */}
        <Section>
          <div className="mb-12 bg-card">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                About <GradientText variant="ochre">Amos Glenn</GradientText>
              </h1>
              <p className="mb-8 text-xl text-muted">
                I&apos;m a learning design professional with over a decade of experience creating
                effective learning solutions that drive meaningful change in organizations. My
                approach combines deep instructional design expertise with a focus on business
                outcomes and learner experience.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* About Content */}
        <Section>
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-card lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold">My Background</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  With a background in education and organizational psychology, I bring a unique
                  perspective to learning design. I&apos;ve worked across industries including
                  technology, healthcare, finance, and retail, helping organizations develop their
                  people and improve performance.
                </p>
                <p>
                  My career began in traditional classroom training, but I quickly became fascinated
                  with the potential of technology to transform learning experiences. Since then,
                  I&apos;ve specialized in creating blended learning solutions that leverage the
                  best of both worlds—human connection and technological innovation.
                </p>
                <p>
                  What sets my approach apart is a relentless focus on{' '}
                  <GradientText variant="ochre">outcomes</GradientText>. I believe that effective
                  learning design starts with a clear understanding of the business problem and the
                  specific behaviors that need to change. This focus ensures that every learning
                  experience I create delivers measurable results.
                </p>
                <p>
                  When I&apos;m not designing learning experiences, you&apos;ll find me exploring
                  new technologies, reading about cognitive science, or hiking in the mountains with
                  my dog, Charlie.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card">
                <h2 className="mb-4 text-xl font-semibold">Education</h2>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">M.S. Instructional Design & Technology</div>
                    <div className="text-sm text-muted">Stanford University, 2012</div>
                  </li>
                  <li>
                    <div className="font-medium">B.A. Psychology</div>
                    <div className="text-sm text-muted">
                      University of California, Berkeley, 2008
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">
                      Certified Professional in Learning & Performance
                    </div>
                    <div className="text-sm text-muted">ATD, 2014</div>
                  </li>
                </ul>
              </div>

              <div className="bg-card">
                <h2 className="mb-4 text-xl font-semibold">Connect</h2>
                <div className="flex flex-col gap-4">
                  <Link
                    className="flex items-center gap-2 text-muted transition-colors hover:text-primary"
                    href="mailto:your.email@example.com"
                  >
                    <Mail className="size-5" />
                    <span>your.email@example.com</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-muted transition-colors hover:text-primary"
                    href="https://linkedin.com/in/yourprofile"
                  >
                    <Linkedin className="size-5" />
                    <span>linkedin.com/in/yourprofile</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-muted transition-colors hover:text-primary"
                    href="https://github.com/yourusername"
                  >
                    <Github className="size-5" />
                    <span>github.com/yourusername</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Gradient Showcase Card (moved from home page) */}
        <Section>
          <div className="mb-12 bg-card">
            <h2 className="mb-6 text-2xl font-bold">Gradient Showcase</h2>
            <div className="space-y-4">
              {/* Only refined gradients */}
              <p className="text-2xl font-bold">
                <span className="mr-4 font-mono text-sm text-muted">.gradient-text-ochre</span>I{' '}
                <GradientText variant="ochre">design solutions</GradientText> that make a
                difference.
              </p>
              <p className="text-2xl font-bold">
                <span className="mr-4 font-mono text-sm text-muted">.gradient-text-slate</span>I{' '}
                <GradientText variant="slate">design solutions</GradientText> that make a
                difference.
              </p>
              <p className="text-2xl font-bold">
                <span className="mr-4 font-mono text-sm text-muted">.gradient-text-sage</span>I{' '}
                <GradientText variant="sage">design solutions</GradientText> that make a difference.
              </p>
              <p className="text-2xl font-bold">
                <span className="mr-4 font-mono text-sm text-muted">.gradient-text-warm-dark</span>I{' '}
                <GradientText variant="warm-dark">design solutions</GradientText> that make a
                difference.
              </p>
              <p className="text-2xl font-bold">
                <span className="mr-4 font-mono text-sm text-muted">.gradient-text-light-wash</span>
                I <GradientText variant="light-wash">design solutions</GradientText> that make a
                difference.
              </p>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section>
          <div className="mb-12 bg-card">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Want to work together?</h2>
              <p className="mb-8 text-lg text-muted">
                Let&apos;s discuss how I can help your organization create{' '}
                <GradientText variant="slate">effective</GradientText> learning experiences.
              </p>
              <Button asChild className="bg-primary text-foreground hover:bg-primary/90" size="lg">
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </PageLayout>
  )
}
