'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { HeroSection } from '@/components/sections/home/hero-section'
import { MainContentSection } from '@/components/sections/home/main-content-section'
import { ExpertiseSection } from '@/components/sections/home/expertise-section'
import { CtaSection } from '@/components/sections/home/cta-section'
import { ReactElement } from 'react'
import { ProjectOne } from '@/components/sections/home/project-one'
import { HeroTest } from '@/components/sections/home/hero-test'
import { FeaturedProjects } from '@/components/sections/home/featured-projects'
import { ProjectTest } from '@/components/sections/home/project-test'
import RotatingQuoteCard from '@/components/sections/home/rotating-quote-section'

export default function HomePage(): ReactElement {
  return (
    <PageLayout>
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-3">
          <div className="space-y-8 md:col-span-2">
            <HeroTest />
            <MainContentSection />
          </div>
          <div className="space-y-8">
            <FeaturedProjects />
            <ProjectOne />
          </div>
          <div className="space-y-8 md:col-span-1">
            <RotatingQuoteCard />
            <ExpertiseSection />
          </div>
          <div className="space-y-8 md:col-span-2">
            <ProjectTest />
          </div>
          <div className="space-y-8 md:col-span-3">
            <CtaSection />
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}
