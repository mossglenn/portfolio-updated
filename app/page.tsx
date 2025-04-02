'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { HeroSection } from '@/components/sections/home/hero-section'
import { MainContentSection } from '@/components/sections/home/main-content-section'
import { ExpertiseSection } from '@/components/sections/home/expertise-section'
import { ToolstackSection } from '@/components/sections/home/toolstack-section'
import { CtaSection } from '@/components/sections/home/cta-section'
import { ReactElement } from 'react'
import { ProjectOne } from '@/components/sections/home/project-one'
import { ProjectTest } from '@/components/sections/home/project-test'

export default function HomePage(): ReactElement {
  return (
    <PageLayout>
      <Container>
        {/* Hero Section */}
        <Section>
          <HeroSection />
        </Section>

        {/* Main Content Section */}
        <Section>
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MainContentSection />
            </div>

            <div className="space-y-8">
              <ProjectTest />
              <ExpertiseSection />
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section>
          <CtaSection />
        </Section>
      </Container>
    </PageLayout>
  )
}
