'use client'

import { Gem } from 'lucide-react'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SpotlightBackground } from '@/components/ui/spotlight-background'

export function FeaturedProjects(): ReactElement {
  return (
    <Card className="mx-auto mb-4 max-w-[300px] overflow-hidden">
      <CardContent className="relative w-full p-0">
        <div className="absolute right-0 top-[28%] z-10">
          <p className="px-8 text-right font-display text-4xl font-bold leading-none text-brand">
            Project
          </p>
          <p className="px-8 text-right font-display text-4xl font-bold leading-none text-brand">
            Spotlight
          </p>
        </div>
        <div className="relative w-full">
          <SpotlightBackground />

          <div className="bg-[#c5c6d8] px-6 pt-4 text-right text-lg font-bold leading-tight text-brand">
            <p>Explore a curated selection of the most impactful work.</p>
            <Button asChild className="my-2 shadow-lg" variant="secondary">
              <Link href="/contact">
                Visit Portfolio <Gem className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
