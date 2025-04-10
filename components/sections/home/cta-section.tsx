import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'


export function CtaSection(): ReactElement {
  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to design learning that makes a{' '}
            <span className="text-gradient-brand">difference</span>?
          </h2>
          <p className="mb-8 text-lg text-foreground">
            Let&apos;s discuss how I can help your organization create{' '}
            <span className="text-gradient-brand">effective</span> learning experiences.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in touch <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
