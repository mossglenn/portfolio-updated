'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button_OLD'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card_OLD'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/page-layout'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlaygroundPage(): ReactElement {
  return (
    <PageLayout>
      <Container>
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-[var(--color-light-text)]">Design System</h1>
          <p className="text-[var(--color-muted-text)]">
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
                  <Button className="bg-[var(--color-brand)] text-[var(--color-light-text)]">
                    Default
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-[var(--color-muted-text)] text-[var(--color-light-text)]"
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[var(--color-brand)] text-[var(--color-brand)]"
                  >
                    Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-[var(--color-card)] text-[var(--color-light-text)]"
                  >
                    Ghost
                  </Button>
                  <Button variant="link" className="text-[var(--color-accent)]">
                    Link
                  </Button>
                  <Button
                    variant="destructive"
                    className="bg-[var(--color-dark)] text-[var(--color-light-text)]"
                  >
                    Destructive
                  </Button>
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]">
                    Gradient Button 1
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[3px] border-transparent bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, var(--color-brand), var(--color-accent))',
                      backgroundClip: 'padding-box',
                      borderRadius: '0.75rem',
                      borderWidth: '2px',
                    }}
                  >
                    Gradient Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-muted-text)] text-[var(--color-light-text)]"
                  >
                    Gradient Ghost Button
                  </Button>
                  <Button
                    variant="destructive"
                    className="bg-gradient-to-r from-[var(--color-destructive)] to-[var(--color-dark)] text-[var(--color-light-text)]"
                  >
                    Gradient Destructive Button
                  </Button>
                  <Button
                    variant="link"
                    className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-light-text)] bg-clip-text text-transparent"
                  >
                    Gradient Link Button
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-gradient-to-r from-[var(--color-muted-text)] to-[var(--color-brand)] text-[var(--color-light-text)]"
                  >
                    Gradient Secondary Button
                  </Button>
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-amber)] text-[var(--color-light-text)] hover:from-[var(--color-amber)] hover:to-[var(--color-brand)]">
                    Hover Gradient Button
                  </Button>
                </CardContent>
              </Card>

              {/* Highlighted Button Section */}
              <Section title="Highlighted Buttons" className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-[var(--color-light-text)]">
                    Highlighted Button
                  </Button>
                </div>
              </Section>
            </Section>

            {/* Gradient Card Background */}
            <Section title="Gradient Cards" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div
                  className="rounded-lg p-6"
                  style={{
                    background: `linear-gradient(to bottom right, var(--color-brand), var(--color-muted-text))`,
                    color: 'white',
                  }}
                >
                  <h3 className="mb-2 text-xl font-bold">Gradient Card</h3>
                  <p>
                    This card uses a gradient background from var(--color-brand) to
                    var(--color-muted-text).
                  </p>
                  <Button className="mt-4 bg-white text-[var(--color-accent)] hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
            </Section>
            <Section>
              {/* Card with Gradient Background */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom right, var(--primary), var(--accent))`, // Gradient from brand color to accent color
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Stunning Gradient Background
                      </h2>
                      <p className="text-xl">
                        This card features a linear gradient from the brand color to the accent
                        color, making it visually appealing and dynamic.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to top left, var(--background), var(--muted))`, // Dark to light gradient
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Dark to Light Gradient
                      </h2>
                      <p className="text-xl">
                        This card has a gradient that transitions from a dark background to a
                        lighter muted color, giving it a modern and elegant feel.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to right, var(--muted), var(--accent-light))`, // Subtle gradient from muted to a light accent
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Soft Gradient with Accent
                      </h2>
                      <p className="text-xl">
                        A subtle gradient from muted tones to a lighter accent color, creating a
                        refined and professional look.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--accent)] hover:bg-white/90">
                        Discover More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom right, var(--accent), var(--primary))`, // Bold vibrant gradient
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Bold and Vibrant
                      </h2>
                      <p className="text-xl">
                        A vibrant gradient between accent and brand colors that grabs attention and
                        adds a pop of color to the page.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Explore Now
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `linear-gradient(to bottom, var(--background), var(--muted))`, // Simple gradient with darker edges
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Simple Gradient with Darker Edges
                      </h2>
                      <p className="text-xl">
                        A straightforward gradient from dark to muted tones, providing a minimalist
                        feel while adding a touch of elegance.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-xl border-[var(--border)] p-6"
                      style={{
                        background: `linear-gradient(to right, var(--muted-light), var(--accent-light))`, // Soft gradient with rounded border
                        color: 'white',
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-white">
                        Soft Gradient with Rounded Border
                      </h2>
                      <p className="text-xl">
                        A soft gradient background with rounded corners, perfect for showcasing
                        products or services in a subtle, elegant way.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--accent)] hover:bg-white/90">
                        Get Started
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-transparent">
                        Gradient Text Title
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        A Beautiful <span className="gradient-text-ochre">Design</span>
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This card uses solid colors for the background and gradient text to create a
                      dynamic effect. It highlights important content using color gradients.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `var(--card)`, // Solid background color
                        border: `3px solid transparent`,
                        borderImage: `linear-gradient(to right, var(--primary), var(--accent)) 1`,
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Border Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card uses a gradient border to give the content a dynamic and modern
                        look while maintaining a solid background for the card itself.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Explore Now
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Button Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card features a gradient button while maintaining a solid background
                        color for the card. The button adds an extra pop of color and visual
                        interest.
                      </p>
                    </div>
                    <Button className="mt-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white hover:bg-opacity-[0.8]">
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-lg p-6"
                      style={{
                        background: `var(--card)`,
                        boxShadow: `0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.15), inset 0 0 0 3px linear-gradient(to bottom right, var(--primary), var(--accent))`,
                      }}
                    >
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)]">
                        Gradient Shadow Card
                      </h2>
                      <p className="text-xl text-[var(--muted-foreground)]">
                        This card features a dynamic gradient shadow for a unique effect, giving the
                        card a sense of depth while maintaining a solid background.
                      </p>
                      <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="relative rounded-lg p-6"
                      style={{
                        backgroundImage: `url('https://source.unsplash.com/random')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-black/40"></div>
                      <div className="relative z-10 text-left text-white">
                        <h2 className="mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-transparent">
                          Gradient Text Overlay
                        </h2>
                        <p className="text-xl">
                          This card features gradient text overlaying a background image, creating
                          an eye-catching effect.
                        </p>
                        <Button className="mt-4 bg-white text-[var(--primary)] hover:bg-white/90">
                          Discover More
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Card with Dark Background */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Dark Theme Card
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Clean and Modern <span className="gradient-text-ochre">Design</span>
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This card uses a darker background color to bring out the importance of the
                      content. It features subtle text gradients to highlight key concepts.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Gradient Card Example */}
              <Card className="mb-12">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Gradient Card Title
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Beautiful <span className="gradient-text-ochre">Design</span>
                      </h1>
                      <h1 className="mt-2 text-right text-[clamp(1.5rem,6vw,3rem)] font-bold">
                        with a difference.
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This is a gradient card styled with the updated color palette. It transitions
                      smoothly and highlights important text with color gradients.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Plain Card with Border */}
              <Card className="mb-12 border border-[var(--border)]">
                <CardContent className="bg-[var(--card)] p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-left">
                      <h2 className="mt-2 text-[clamp(1.5rem,7.5vw,3rem)] font-bold text-[var(--foreground)] text-opacity-80">
                        Simple Border Card
                      </h2>
                      <h1 className="mt-2 text-[clamp(1.5rem,9vw,4rem)] font-bold">
                        Elegant Design
                      </h1>
                    </div>
                    <p className="mb-8 text-xl text-[var(--muted-foreground)]">
                      This is a simple bordered card with a clean design, using the core brand
                      colors and layout for a more traditional style.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button size="lg" asChild>
                        <Link href="/work">
                          View my work <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
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
                  <p className="text-sm text-muted-foreground">
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
            <Section title="Color Palette" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline">Design Tokens</Badge>
              </div>
              <Separator className="mb-4" />

              <Card>
                <CardHeader>
                  <CardTitle>CSS Variable Colors</CardTitle>
                  <CardDescription>Display of CSS variables and their HSL values</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-brand</div>
                    <div className="text-xs text-muted-foreground">HSL(260, 58%, 52%)</div>
                  </div>
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-accent</div>
                    <div className="text-xs text-muted-foreground">HSL(30, 90%, 57%)</div>
                  </div>
                  <div>
                    <div
                      className="h-16 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-text)' }}
                    ></div>
                    <div className="text-sm font-medium">--color-muted-text</div>
                    <div className="text-xs text-muted-foreground">HSL(240, 10%, 65%)</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shades of Brand Color</CardTitle>
                  <CardDescription>Shades of the brand color for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#734CA9' }}
                    ></div>
                    <div className="text-xs font-medium">Brand Color</div>
                    <div className="text-xs text-muted-foreground">#734CA9</div>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#5C3C87' }}
                    ></div>
                    <div className="text-xs font-medium">Darker Shade</div>
                    <div className="text-xs text-muted-foreground">#5C3C87</div>
                  </div>
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#4A2D6B' }}
                    ></div>
                    <div className="text-xs font-medium">Darkest Shade</div>
                    <div className="text-xs text-muted-foreground">#4A2D6B</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>CSS Variable Color Swatches</CardTitle>
                  <CardDescription>Colors defined in globals.css for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  {/* Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand</div>
                    <div className="text-xs text-muted-foreground">#734CA9</div>
                  </div>

                  {/* Light Violet */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-light</div>
                    <div className="text-xs text-muted-foreground">#D1A7E4</div>
                  </div>

                  {/* Deep Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-dark</div>
                    <div className="text-xs text-muted-foreground">#39344B</div>
                  </div>

                  {/* Neutral Light Gray */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-neutral)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-neutral</div>
                    <div className="text-xs text-muted-foreground">#BEB8CD</div>
                  </div>

                  {/* Darker Violet */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-dark-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-dark-text</div>
                    <div className="text-xs text-muted-foreground">#5C3C87</div>
                  </div>

                  {/* Amber Accent */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent</div>
                    <div className="text-xs text-muted-foreground">#E3A34E</div>
                  </div>

                  {/* Light Text */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-light-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-light-text</div>
                    <div className="text-xs text-muted-foreground">#FFFFFF</div>
                  </div>

                  {/* Muted Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-text)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-text</div>
                    <div className="text-xs text-muted-foreground">#5C3C87</div>
                  </div>

                  {/* Background Dark Slate */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-background)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-background</div>
                    <div className="text-xs text-muted-foreground">#292A3E</div>
                  </div>

                  {/* Card Background */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-card)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-card</div>
                    <div className="text-xs text-muted-foreground">#343A47</div>
                  </div>

                  {/* Lighter Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-light</div>
                    <div className="text-xs text-muted-foreground">#8C74C2</div>
                  </div>

                  {/* Darker Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-dark</div>
                    <div className="text-xs text-muted-foreground">#5C3C87</div>
                  </div>

                  {/* Darker Shade of Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-brand-darker)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-brand-darker</div>
                    <div className="text-xs text-muted-foreground">#4A2D6B</div>
                  </div>

                  {/* Lighter Amber */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent-light</div>
                    <div className="text-xs text-muted-foreground">#F0B36D</div>
                  </div>

                  {/* Darker Amber */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-accent-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-accent-dark</div>
                    <div className="text-xs text-muted-foreground">#C26A2A</div>
                  </div>

                  {/* Muted Light */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-light)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-light</div>
                    <div className="text-xs text-muted-foreground">#6A4D72</div>
                  </div>

                  {/* Muted Dark */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: 'var(--color-muted-dark)' }}
                    ></div>
                    <div className="text-xs font-medium">--color-muted-dark</div>
                    <div className="text-xs text-muted-foreground">#4A2D52</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All Gradient Colors in UI Theme</CardTitle>
                  <CardDescription>Colors used in gradients for UI components</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 md:grid-cols-6">
                  {/* Brand Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#734CA9' }}
                    ></div>
                    <div className="text-xs font-medium">Brand Color</div>
                    <div className="text-xs text-muted-foreground">#734CA9</div>
                  </div>

                  {/* Amber Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#E3A34E' }}
                    ></div>
                    <div className="text-xs font-medium">Amber</div>
                    <div className="text-xs text-muted-foreground">#E3A34E</div>
                  </div>

                  {/* Sage Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#A3B7A3' }}
                    ></div>
                    <div className="text-xs font-medium">Sage</div>
                    <div className="text-xs text-muted-foreground">#A3B7A3</div>
                  </div>

                  {/* Dark Purple */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#292A3E' }}
                    ></div>
                    <div className="text-xs font-medium">Dark Purple</div>
                    <div className="text-xs text-muted-foreground">#292A3E</div>
                  </div>

                  {/* Light Sky Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#A3C8D6' }}
                    ></div>
                    <div className="text-xs font-medium">Sky Blue</div>
                    <div className="text-xs text-muted-foreground">#A3C8D6</div>
                  </div>

                  {/* Soft Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#6B8FA6' }}
                    ></div>
                    <div className="text-xs font-medium">Soft Blue</div>
                    <div className="text-xs text-muted-foreground">#6B8FA6</div>
                  </div>

                  {/* Muted Text */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#BEB8CD' }}
                    ></div>
                    <div className="text-xs font-medium">Muted Text</div>
                    <div className="text-xs text-muted-foreground">#BEB8CD</div>
                  </div>

                  {/* Dark Blue */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#3A3D55' }}
                    ></div>
                    <div className="text-xs font-medium">Dark Blue</div>
                    <div className="text-xs text-muted-foreground">#3A3D55</div>
                  </div>

                  {/* Ochre Color */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#E3A34E' }}
                    ></div>
                    <div className="text-xs font-medium">Ochre</div>
                    <div className="text-xs text-muted-foreground">#E3A34E</div>
                  </div>

                  {/* Lavender */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#B6A0D2' }}
                    ></div>
                    <div className="text-xs font-medium">Lavender</div>
                    <div className="text-xs text-muted-foreground">#B6A0D2</div>
                  </div>

                  {/* Pink to Lavender Gradient */}
                  <div className="space-y-1">
                    <div
                      className="h-12 w-full rounded-md"
                      style={{ backgroundColor: '#F1A0D1' }}
                    ></div>
                    <div className="text-xs font-medium">Pink</div>
                    <div className="text-xs text-muted-foreground">#F1A0D1</div>
                  </div>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>

          {/* Gradients Tab */}
          <TabsContent value="gradients" className="space-y-8">
            <Section title="Gradient Backgrounds" className="space-y-6">
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#E3A34E]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Purple to Amber Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#E3A34E]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#292A3E] to-[#3A3D55]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Dark to Light Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#292A3E] to-[#3A3D55]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#E3A34E] to-[#A3B7A3]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Amber to Sage Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#E3A34E] to-[#A3B7A3]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#6B8FA6]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Muted Purple to Soft Blue Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#6B8FA6]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#292A3E] to-[#A3C8D6]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Deep Slate to Sky Blue Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#292A3E] to-[#A3C8D6]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#E3A34E] to-[#A7C5A3]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Ochre to Sage Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#E3A34E] to-[#A7C5A3]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#F1A0D1] to-[#9C7DFF]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Soft Pink to Lavender Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#F1A0D1] to-[#9C7DFF]
                </code>
              </div>
              <div className="space-y-1">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-[#734CA9] to-[#B6A0D2]">
                  <span className="text-xl font-bold text-white drop-shadow-md">
                    Dark Purple to Light Lavender Gradient
                  </span>
                </div>
                <code className="text-xs text-muted-foreground">
                  bg-gradient-to-r from-[#734CA9] to-[#B6A0D2]
                </code>
              </div>
              <div>
                <ul>
                  <li>
                    Amber to Sage: A warm-to-cool gradient for a professional yet vibrant
                    appearance.
                  </li>
                  <li>
                    Muted Purple to Soft Blue: Subtle gradient with calming and complementary tones.
                  </li>
                  <li>Deep Slate to Sky Blue:Cool gradient providing balance and calmness.</li>
                  <li>Ochre to Sage:A natural earthy gradient for grounding tones.</li>
                  <li>Soft Pink to Lavender: Playful and light gradient for a gentle aesthetic</li>
                  <li>
                    Dark Purple to Light Lavender: A monochromatic gradient that sticks to one
                    family of colors for a harmonious effect.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Text Gradients" className="space-y-4">
              <div className="space-y-1">
                <h2 className="bg-gradient-to-r from-[#734CA9] to-[#E3A34E] bg-clip-text text-4xl font-bold text-transparent">
                  Gradient Text Example
                </h2>
                <code className="text-xs text-muted-foreground">
                  text-transparent bg-clip-text bg-gradient-to-r from-[#734CA9] to-[#E3A34E]
                </code>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </Container>
    </PageLayout>
  )
}
