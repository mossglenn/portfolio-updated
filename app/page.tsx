'use client'

import { type ReactElement } from 'react'

import { Container } from '@/components/layout/container'
import { PageLayout } from '@/components/layout/page-layout'
import { CtaSection } from '@/components/sections/home/cta-section'
import { ExpertiseSection } from '@/components/sections/home/expertise-section'
import { FeaturedProjects } from '@/components/sections/home/featured-projects'
import { HeroTest } from '@/components/sections/home/hero-test'
import { MainContentSection } from '@/components/sections/home/main-content-section'
import { ProjectOne } from '@/components/sections/home/project-one'
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
