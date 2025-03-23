'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { GradientText } from '@/components/common/gradient-text'
import tokens from '@/lib/design/tokens'

export default function PlaygroundPage() {
  const [isChecked, setIsChecked] = useState(false)

  const gradientVariants = ['ochre', 'slate', 'sage', 'warm-dark', 'light-wash'] as const

  return (
    <PageLayout>
      <Container>
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Design System</h1>
          <p className="text-muted-foreground">
            A showcase of UI components and design tokens used in this project.
          </p>
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
            {/* Buttons Section */}
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
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <div>
                    <code className="rounded bg-muted px-1 py-0.5 text-xs">
                      variant=&quot;default&quot; | &quot;secondary&quot; | &quot;outline&quot; |
                      &quot;ghost&quot; | &quot;link&quot; | &quot;destructive&quot;
                    </code>
                  </div>
                </CardFooter>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>Different button sizes for various contexts</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" className="ml-4">
                    <ChevronRight className="size-4" />
                  </Button>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <div>
                    <code className="rounded bg-muted px-1 py-0.5 text-xs">
                      size=&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot; | &quot;icon&quot;
                    </code>
                  </div>
                </CardFooter>
              </Card>
            </Section>

            {/* Form Elements Section */}
            <Section title="Form Elements" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                  <CardDescription>Text input field for collecting user data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>

                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                  <CardDescription>Toggle between two states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" checked={isChecked} onCheckedChange={setIsChecked} />
                    <Label htmlFor="airplane-mode">{isChecked ? 'On' : 'Off'}</Label>
                  </div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Section title="Typography" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Headings</CardTitle>
                  <CardDescription>Typography scale for headings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                      Heading 1
                    </h1>
                    <code className="text-xs text-muted-foreground">
                      text-4xl font-extrabold tracking-tight lg:text-5xl
                    </code>
                  </div>

                  <div>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Heading 2
                    </h2>
                    <code className="text-xs text-muted-foreground">
                      text-3xl font-semibold tracking-tight
                    </code>
                  </div>

                  <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
                    <code className="text-xs text-muted-foreground">
                      text-2xl font-semibold tracking-tight
                    </code>
                  </div>

                  <div>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
                    <code className="text-xs text-muted-foreground">
                      text-xl font-semibold tracking-tight
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Body Text</CardTitle>
                  <CardDescription>Typography for body content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      The king, seeing how much happier his subjects were, realized the error of his
                      ways and promised to rule with fairness and compassion.
                    </p>
                    <code className="text-xs text-muted-foreground">
                      leading-7 [&:not(:first-child)]:mt-6
                    </code>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      This is smaller text, often used for secondary information.
                    </p>
                    <code className="text-xs text-muted-foreground">
                      text-sm text-muted-foreground
                    </code>
                  </div>

                  <div>
                    <p className="text-lg font-medium">
                      This is larger text, often used for important information.
                    </p>
                    <code className="text-xs text-muted-foreground">text-lg font-medium</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lists</CardTitle>
                  <CardDescription>Typography for lists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-lg font-medium">Unordered List</h4>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>First item in an unordered list</li>
                      <li>Second item in an unordered list</li>
                      <li>Third item in an unordered list</li>
                    </ul>
                    <code className="mt-2 block text-xs text-muted-foreground">
                      list-disc pl-6 space-y-2
                    </code>
                  </div>

                  <div>
                    <h4 className="mb-2 text-lg font-medium">Ordered List</h4>
                    <ol className="list-decimal space-y-2 pl-6">
                      <li>First item in an ordered list</li>
                      <li>Second item in an ordered list</li>
                      <li>Third item in an ordered list</li>
                    </ol>
                    <code className="mt-2 block text-xs text-muted-foreground">
                      list-decimal pl-6 space-y-2
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quotes and Code</CardTitle>
                  <CardDescription>Typography for quotes and code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                      &quot;After all,&quot; he said, &quot;everyone makes mistakes. The important
                      thing is to learn from them.&quot;
                    </blockquote>
                    <code className="mt-2 block text-xs text-muted-foreground">
                      border-l-2 pl-6 italic
                    </code>
                  </div>

                  <div className="flex flex-col gap-1">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      console.log(&apos;Hello World&apos;)
                    </code>
                    <code className="text-xs text-muted-foreground">
                      bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
                    </code>
                  </div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Section title="Color Palette" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Design Tokens</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Primary Colors</CardTitle>
                  <CardDescription>Main brand colors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-primary"></div>
                      <div className="text-sm font-medium">Primary</div>
                      <div className="text-xs text-muted-foreground">bg-primary</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-secondary"></div>
                      <div className="text-sm font-medium">Secondary</div>
                      <div className="text-xs text-muted-foreground">bg-secondary</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-accent"></div>
                      <div className="text-sm font-medium">Accent</div>
                      <div className="text-xs text-muted-foreground">bg-accent</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-muted"></div>
                      <div className="text-sm font-medium">Muted</div>
                      <div className="text-xs text-muted-foreground">bg-muted</div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-16 w-full rounded-md bg-destructive"></div>
                      <div className="text-sm font-medium">Destructive</div>
                      <div className="text-xs text-muted-foreground">bg-destructive</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Brand Colors</CardTitle>
                  <CardDescription>Custom brand color palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    <div className="space-y-1.5">
                      <div
                        className="h-16 w-full rounded-md"
                        style={{ backgroundColor: tokens.colors.ochre[500] }}
                      ></div>
                      <div className="text-sm font-medium">Ochre</div>
                      <div className="text-xs text-muted-foreground">
                        {tokens.colors.ochre[500]}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div
                        className="h-16 w-full rounded-md"
                        style={{ backgroundColor: tokens.colors.slate[700] }}
                      ></div>
                      <div className="text-sm font-medium">Slate</div>
                      <div className="text-xs text-muted-foreground">
                        {tokens.colors.slate[700]}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div
                        className="h-16 w-full rounded-md"
                        style={{ backgroundColor: tokens.colors.sage[400] }}
                      ></div>
                      <div className="text-sm font-medium">Sage</div>
                      <div className="text-xs text-muted-foreground">{tokens.colors.sage[400]}</div>
                    </div>
                    <div className="space-y-1.5">
                      <div
                        className="h-16 w-full rounded-md"
                        style={{ backgroundColor: tokens.colors.sand[50] }}
                      ></div>
                      <div className="text-sm font-medium">Soft Sand</div>
                      <div className="text-xs text-muted-foreground">{tokens.colors.sand[50]}</div>
                    </div>
                    <div className="space-y-1.5">
                      <div
                        className="h-16 w-full rounded-md"
                        style={{ backgroundColor: tokens.colors.carbon[950] }}
                      ></div>
                      <div className="text-sm font-medium text-white">Foundation Black</div>
                      <div className="text-xs text-white/70">{tokens.colors.carbon[950]}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Ochre Color Scale</CardTitle>
                  <CardDescription>Full color scale for the Ochre palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
                    {Object.entries(tokens.colors.ochre).map(([shade, color]) => (
                      <div key={shade} className="space-y-1">
                        <div
                          className="h-12 w-full rounded-md"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-xs font-medium">Ochre {shade}</div>
                        <div className="text-xs text-muted-foreground">{color}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Slate Color Scale</CardTitle>
                  <CardDescription>Full color scale for the Slate palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
                    {Object.entries(tokens.colors.slate).map(([shade, color]) => (
                      <div key={shade} className="space-y-1">
                        <div
                          className="h-12 w-full rounded-md"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-xs font-medium">Slate {shade}</div>
                        <div className="text-xs text-muted-foreground">{color}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Sage Color Scale</CardTitle>
                  <CardDescription>Full color scale for the Sage palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
                    {Object.entries(tokens.colors.sage).map(([shade, color]) => (
                      <div key={shade} className="space-y-1">
                        <div
                          className="h-12 w-full rounded-md"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-xs font-medium">Sage {shade}</div>
                        <div className="text-xs text-muted-foreground">{color}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Gradients Tab */}
          <TabsContent value="gradients" className="space-y-8">
            <Section title="Text Gradients" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Custom</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Gradient Text</CardTitle>
                  <CardDescription>Custom gradient text effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {gradientVariants.map((variant) => (
                    <div key={variant} className="space-y-1">
                      <p className="text-3xl font-bold">
                        This text uses the{' '}
                        <GradientText variant={variant}>gradient-text-{variant}</GradientText>{' '}
                        gradient
                      </p>
                      <code className="text-xs text-muted-foreground">
                        {`<GradientText variant="${variant}">text</GradientText>`}
                      </code>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Section>

            <Section title="Background Gradients" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Custom</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>Gradient Backgrounds</CardTitle>
                  <CardDescription>Custom gradient background effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-ochre">
                      <span className="text-xl font-bold text-white drop-shadow-md">
                        Ochre Gradient
                      </span>
                    </div>
                    <code className="text-xs text-muted-foreground">bg-gradient-ochre</code>
                  </div>

                  <div className="space-y-1">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-slate">
                      <span className="text-xl font-bold text-white drop-shadow-md">
                        Slate Gradient
                      </span>
                    </div>
                    <code className="text-xs text-muted-foreground">bg-gradient-slate</code>
                  </div>

                  <div className="space-y-1">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-sage">
                      <span className="text-xl font-bold text-white drop-shadow-md">
                        Sage Gradient
                      </span>
                    </div>
                    <code className="text-xs text-muted-foreground">bg-gradient-sage</code>
                  </div>

                  <div className="space-y-1">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-warm-dark">
                      <span className="text-xl font-bold text-white drop-shadow-md">
                        Warm Dark Gradient
                      </span>
                    </div>
                    <code className="text-xs text-muted-foreground">bg-gradient-warm-dark</code>
                  </div>

                  <div className="space-y-1">
                    <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-light-wash">
                      <span className="text-xl font-bold text-slate-800">Light Wash Gradient</span>
                    </div>
                    <code className="text-xs text-muted-foreground">bg-gradient-light-wash</code>
                  </div>
                </CardContent>
              </Card>
            </Section>

            <Section title="Gradient Cards" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Examples</Badge>
              </div>
              <Separator className="mb-4" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div
                  className="rounded-lg p-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${tokens.colors.ochre[400]}, ${tokens.colors.ochre[600]})`,
                    color: 'white',
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Ochre Card</h3>
                  <p>This card uses a gradient background from ochre-400 to ochre-600.</p>
                  <Button className="mt-4 bg-white text-ochre-600 hover:bg-white/90">
                    Learn More
                  </Button>
                </div>

                <div
                  className="rounded-lg p-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${tokens.colors.slate[600]}, ${tokens.colors.slate[800]})`,
                    color: 'white',
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Slate Card</h3>
                  <p>This card uses a gradient background from slate-600 to slate-800.</p>
                  <Button className="mt-4 bg-white text-slate-800 hover:bg-white/90">
                    Learn More
                  </Button>
                </div>

                <div
                  className="rounded-lg p-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${tokens.colors.sage[300]}, ${tokens.colors.sage[500]})`,
                    color: tokens.colors.slate[900],
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Sage Card</h3>
                  <p>This card uses a gradient background from sage-300 to sage-500.</p>
                  <Button
                    className="mt-4"
                    style={{ background: tokens.colors.slate[900], color: 'white' }}
                  >
                    Learn More
                  </Button>
                </div>

                <div
                  className="rounded-lg border p-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${tokens.colors.sand[50]}, ${tokens.colors.sand[200]})`,
                    color: tokens.colors.slate[900],
                    borderColor: tokens.colors.sand[200],
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Sand Card</h3>
                  <p>This card uses a gradient background from sand-50 to sand-200.</p>
                  <Button
                    className="mt-4"
                    style={{ background: tokens.colors.slate[900], color: 'white' }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Section>

            <Section title="Gradient Patterns" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Examples</Badge>
              </div>
              <Separator className="mb-4" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex h-48 items-end p-6"
                    style={{
                      background: `linear-gradient(to right, ${tokens.colors.ochre[400]}, ${tokens.colors.ochre[500]}, ${tokens.colors.ochre[600]})`,
                    }}
                  >
                    <div className="w-full rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-ochre-600">Horizontal Gradient</h3>
                      <p className="text-sm text-slate-600">
                        from-ochre-400 via-ochre-500 to-ochre-600
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex h-48 items-end p-6"
                    style={{
                      background: `linear-gradient(to bottom, ${tokens.colors.slate[600]}, ${tokens.colors.slate[700]}, ${tokens.colors.slate[800]})`,
                    }}
                  >
                    <div className="w-full rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-slate-700">Vertical Gradient</h3>
                      <p className="text-sm text-slate-600">
                        from-slate-600 via-slate-700 to-slate-800
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex h-48 items-end p-6"
                    style={{
                      background: `linear-gradient(to bottom right, ${tokens.colors.sage[300]}, ${tokens.colors.sage[400]}, ${tokens.colors.sage[500]})`,
                    }}
                  >
                    <div className="w-full rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-sage-600">Diagonal Gradient</h3>
                      <p className="text-sm text-slate-600">
                        from-sage-300 via-sage-400 to-sage-500
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex h-48 items-end p-6"
                    style={{
                      background: `radial-gradient(circle, ${tokens.colors.sand[100]}, ${tokens.colors.sand[300]})`,
                    }}
                  >
                    <div className="w-full rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                      <h3 className="text-lg font-bold text-slate-700">Radial Gradient</h3>
                      <p className="text-sm text-slate-600">
                        bg-gradient-radial from-sand-100 to-sand-300
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </Container>
    </PageLayout>
  )
}
