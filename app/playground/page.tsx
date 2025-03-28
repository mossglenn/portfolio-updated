'use client'

import { Button } from '@/components/ui/button_OLD'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card_OLD'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const themeOptions = [
  { label: 'Default', className: '' },
  { label: 'Test Theme', className: 'theme-test' },
  { label: 'Experimental', className: 'theme-experimental' },
]

export default function PlaygroundPage(): ReactElement {
  const [themeClass, setThemeClass] = useState('')

  useEffect(() => {
    document.body.className = themeClass
  }, [themeClass])

  const colorGroups = [
    {
      label: 'Brand Colors',
      tokens: ['brand', 'brand-light', 'brand-dark', 'brand-darker'],
    },
    {
      label: 'Accent Colors',
      tokens: ['accent', 'accent-light', 'accent-dark'],
    },
    {
      label: 'Background & Cards',
      tokens: ['background', 'background-alt', 'card', 'card-alt'],
    },
    {
      label: 'Foreground / Text',
      tokens: ['foreground', 'foreground-muted', 'foreground-light', 'foreground-dark'],
    },
    {
      label: 'Neutral / Muted',
      tokens: ['neutral', 'muted', 'muted-light', 'muted-dark'],
    },
    {
      label: 'Secondary',
      tokens: ['secondary', 'secondary-light'],
    },
    {
      label: 'UI Tokens',
      tokens: [
        'border',
        'input',
        'ring',
        'popover',
        'popover-foreground',
        'destructive',
        'destructive-foreground',
      ],
    },
    {
      label: 'Gradient Tokens',
      tokens: ['sage', 'sky', 'slate-light', 'pink', 'lavender', 'lavender-light'],
    },
  ]

  const gradients = [
    'brand',
    'muted',
    'secondary',
    'dark',
    'slate-sky',
    'earth',
    'playful',
    'lavender',
  ]

  return (
    <PageLayout>
      <Container>
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-foreground">Design System</h1>
          <p className="text-foreground-muted">
            A showcase of UI components and design tokens used in this project.
          </p>
        </div>

        <div className="mb-8 flex gap-4">
          <span className="text-sm font-medium">Theme:</span>
          {themeOptions.map((theme) => (
            <Button
              key={theme.label}
              variant={themeClass === theme.className ? 'default' : 'outline'}
              onClick={() => setThemeClass(theme.className)}
            >
              {theme.label}
            </Button>
          ))}
        </div>

        <Tabs defaultValue="components" className="mb-12 w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="gradients">Gradients</TabsTrigger>
          </TabsList>
          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <Section title="Buttons" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Different button styles for various contexts</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button className="bg-brand text-foreground-light">Default</Button>
                  <Button variant="secondary" className="bg-muted text-foreground-light">
                    Secondary
                  </Button>
                  <Button variant="outline" className="border-brand text-brand">
                    Outline
                  </Button>
                  <Button variant="ghost" className="bg-card text-foreground-light">
                    Ghost
                  </Button>
                  <Button variant="link" className="text-accent">
                    Link
                  </Button>
                  <Button variant="destructive" className="bg-brand-darker text-foreground-light">
                    Destructive
                  </Button>
                  <Button className="bg-gradient-brand text-foreground-light">
                    Gradient Button 1
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-gradient-brand border-[3px] border-transparent text-foreground-light"
                    style={{ backgroundClip: 'padding-box', borderRadius: '0.75rem' }}
                  >
                    Gradient Outline
                  </Button>
                  <Button variant="ghost" className="bg-gradient-muted text-foreground-light">
                    Gradient Ghost Button
                  </Button>
                  <Button variant="destructive" className="bg-gradient-dark text-foreground-light">
                    Gradient Destructive Button
                  </Button>
                  <Button
                    variant="link"
                    className="bg-gradient-brand bg-clip-text text-transparent"
                  >
                    Gradient Link Button
                  </Button>
                  <Button className="bg-gradient-secondary hover:bg-gradient-brand text-foreground-light">
                    Hover Gradient Button
                  </Button>
                </CardContent>
              </Card>
            </Section>

            <Section title="Gradient Cards" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-gradient-brand rounded-lg p-6 text-foreground-light">
                        <h2 className="mb-2 text-xl font-bold">Animated Gradient Card</h2>
                        <p>This card uses the animated brand gradient background.</p>
                        <Button className="mt-4 bg-white text-brand hover:bg-white/90">
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-gradient-muted rounded-lg p-6 text-foreground-light">
                        <h2 className="mb-2 text-xl font-bold">Muted to Accent</h2>
                        <p>This card uses a subtle gradient from muted to accent tones.</p>
                        <Button className="mt-4 bg-white text-accent hover:bg-white/90">
                          Explore
                        </Button>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </TabsContent>
          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Section title="Typography" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Plus Jakarta Sans</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Headings</CardTitle>
                  <CardDescription>
                    Typography scale for headings using Plus Jakarta Sans
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h1 className="text-4xl font-extrabold">Heading 1</h1>
                  <h2 className="text-3xl font-semibold">Heading 2</h2>
                  <h3 className="text-2xl font-semibold">Heading 3</h3>
                  <h4 className="text-xl font-semibold">Heading 4</h4>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Body Text</CardTitle>
                  <CardDescription>Typography for body content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="leading-7">
                    The king, seeing how much happier his subjects were, realized the error of his
                    ways and promised to rule with fairness and compassion.
                  </p>
                  <p className="text-sm text-foreground-muted">
                    This is smaller text, often used for secondary information.
                  </p>
                  <p className="text-lg font-medium">
                    This is larger text, often used for important information.
                  </p>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>
          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            {colorGroups.map((group) => (
              <Section key={group.label} title={group.label} className="space-y-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                  {group.tokens.map((token) => (
                    <Card key={token} className="overflow-hidden">
                      <div
                        className="h-12 w-full"
                        style={{ backgroundColor: `hsl(var(--${token}))` }}
                      ></div>
                      <CardContent className="py-2">
                        <p className="text-xs font-medium">--{token}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Section>
            ))}
          </TabsContent>
          {/* Gradients Tab */}
          <TabsContent value="gradients" className="space-y-8">
            <Section title="Gradient Background Cards" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {gradients.map((gradient) => (
                  <Card key={gradient} className="overflow-hidden">
                    <div
                      className="h-32 w-full rounded-t-lg"
                      style={{ backgroundImage: `var(--gradient-${gradient})` }}
                    ></div>
                    <CardContent className="p-6 text-foreground-light">
                      <h3 className="text-xl font-bold capitalize">
                        {gradient.replace('gradient-', '').replace(/-/g, ' ')}
                      </h3>
                      <p className="text-sm">
                        This card uses the gradient token: <code>--gradient-{gradient}</code>
                      </p>
                      <Button className="mt-4 bg-white text-foreground-dark hover:bg-white/90">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </Container>
    </PageLayout>
  )
}
