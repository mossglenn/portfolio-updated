'use client'

import { ReactElement } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SpotlightBackground } from '@/components/ui/spotlight-background'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Gem } from 'lucide-react'

export function FeaturedProjects(): ReactElement {
  return (
    <Card className="component mx-auto mb-4 max-w-[300px] overflow-hidden">
      <CardContent className="relative w-full p-0">
        <div className="absolute right-0 top-[28%] z-10">
          <p className="font-display px-8 text-right text-4xl font-bold leading-none text-brand">
            Project
          </p>
          <p className="font-display px-8 text-right text-4xl font-bold leading-none text-brand">
            Spotlight
          </p>
        </div>
        <div className="relative w-full">
          <SpotlightBackground />

          <div className="text-bold bg-[#c5c6d8] px-6 pt-4 text-right text-lg leading-tight text-brand">
            <p>Explore a curated selection of the most impactful work.</p>
            <Button variant="secondary" className="my-2 shadow-lg" asChild>
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
