# Component Patterns

Generated: 3/19/2025, 5:56:57 PM

This document contains 10 representative components from your project.

## ./app/about/page.tsx

```tsx
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About | Instructional Design Portfolio",
  description: "Learn about my background, approach, and expertise in instructional design",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">About Me</h1>
            <p className="text-xl text-foreground">
              Passionate instructional designer with expertise in creating innovative, research-based learning
              experiences.
            </p>
            <div className="space-y-4 text-foreground">
              <p>
                With over a decade of experience in the field of instructional design, I've dedicated my career to
                creating learning experiences that are not only effective but also engaging and impactful. My approach
                combines solid learning theory with innovative design practices to create solutions that meet the needs
                of diverse learners.
              </p>
              <p>
                I specialize in bridging the gap between research and practice, translating complex educational theories
                into practical, user-friendly learning experiences. My work spans various sectors including corporate
                training, higher education, and K-12, allowing me to bring a broad perspective to each project.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Professional portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">My Approach</h2>
            <p className="text-foreground max-w-2xl">
              I believe in creating learning experiences that are evidence-based, learner-centered, and results-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Research-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I stay current with the latest research in learning science and cognitive psychology to ensure my
                  designs are based on proven principles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Human-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I put learners at the center of the design process, creating experiences that address their needs,
                  preferences, and contexts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I design with measurable outcomes in mind, ensuring that learning experiences lead to real-world
                  impact and performance improvement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Education & Certifications</h2>
          <p className="text-foreground max-w-2xl">
            Continuous learning is a core value that drives my professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Ph.D. in Learning Sciences</h3>
                <p className="text-foreground">University of Education, 2018</p>
              </div>
              <div>
                <h3 className="font-semibold">M.Ed. in Instructional Design</h3>
                <p className="text-foreground">Design Institute, 2014</p>
              </div>
              <div>
                <h3 className="font-semibold">B.A. in Psychology</h3>
                <p className="text-foreground">State University, 2012</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Certified Professional in Learning Performance (CPLP)</h3>
                <p className="text-foreground">Association for Talent Development</p>
              </div>
              <div>
                <h3 className="font-semibold">Learning Experience Design Certificate</h3>
                <p className="text-foreground">Design Academy</p>
              </div>
              <div>
                <h3 className="font-semibold">Accessibility in Learning Design</h3>
                <p className="text-foreground">Inclusive Learning Institute</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}


```

### Analysis

- **Type**: Server Component
- **Imports**: 2 dependencies
  - next/image
  - @/components/ui/card
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./app/contact/page.tsx

```tsx
import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Instructional Design Portfolio",
  description: "Get in touch to discuss your instructional design needs and potential collaborations",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-12">
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Get in Touch</h1>
          <p className="text-xl text-foreground max-w-2xl">
            Let&apos;s discuss how we can collaborate on your next instructional design project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">contact@example.com</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">+1 (555) 123-4567</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">San Francisco, CA</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="md:sticky md:top-24">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Let&apos;s Collaborate</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  I&apos;m always interested in new projects and collaborations. Whether you have a specific project in mind
                  or just want to explore possibilities, I&apos;d love to hear from you.
                </p>
                <p>My expertise spans various areas of instructional design, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Corporate training and development</li>
                  <li>Educational technology implementation</li>
                  <li>Curriculum design and development</li>
                  <li>E-learning course creation</li>
                  <li>Learning experience design</li>
                  <li>Educational game development</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Availability</h2>
              <p className="text-foreground">
                I&apos;m currently available for freelance projects, consulting, and speaking engagements. My typical
                response time is within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


```

### Analysis

- **Type**: Server Component
- **Imports**: 3 dependencies
  - @/components/contact-form
  - @/components/ui/card
  - lucide-react
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./app/layout.tsx

```tsx
import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Instructional Design Portfolio",
  description: "Portfolio showcasing innovative instructional design work and educational solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
```

### Analysis

- **Type**: Server Component
- **Imports**: 5 dependencies
  - next/font/google
  - @/lib/utils
  - @/components/theme-provider
  - @/components/header
  - @/components/footer
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./app/page.tsx

```tsx
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
    </div>
  )
}


```

### Analysis

- **Type**: Server Component
- **Imports**: 4 dependencies
  - @/components/hero
  - @/components/featured-projects
  - @/components/skills
  - @/components/call-to-action
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./app/portfolio/page.tsx

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Instructional Design Portfolio",
  description: "Explore my portfolio of innovative instructional design projects and educational solutions",
}

export default function PortfolioPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <p>Portfolio content will be added here.</p>
    </div>
  )
}


```

### Analysis

- **Type**: Server Component
- **Imports**: 0 dependencies
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./components/call-to-action.tsx

```tsx
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg bg-primary text-primary-foreground p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Collaborate?</h2>
            <p className="text-lg md:text-xl max-w-2xl">
              Let&apos;s discuss how we can create innovative learning solutions that drive real impact for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white/10 px-8"
              >
                <Link href="/portfolio">Explore Portfolio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


```

### Analysis

- **Type**: Client Component
- **Imports**: 3 dependencies
  - @/components/ui/button
  - next/link
  - framer-motion
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./components/contact-form.tsx

```tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)

    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I&apos;ll get back to you soon.",
    })

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}


```

### Analysis

- **Type**: Client Component
- **Imports**: 6 dependencies
  - react
  - @/components/ui/button
  - @/components/ui/input
  - @/components/ui/label
  - @/components/ui/textarea
  - @/components/ui/use-toast
- **Props Interface**: No
- **Hooks Used**: useState
- **Styling**: Tailwind/CSS Classes

## ./components/featured-projects.tsx

```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Get featured projects
  const projects = getFeaturedProjects(3)

  // Update the filteredProjects logic:
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  // Update the filters array:
  const filters = ["All", ...projects.flatMap((p) => p.tags).filter((tag, index, self) => self.indexOf(tag) === index)]

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
          <p className="text-foreground max-w-2xl">
            Explore my portfolio of innovative instructional design solutions that solve real learning challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.label}</CardTitle>
                  <CardDescription>{project.subLabel}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between">
                    <Link href={project.path}>
                      View Case Study
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


```

### Analysis

- **Type**: Client Component
- **Imports**: 9 dependencies
  - react
  - next/link
  - next/image
  - framer-motion
  - @/components/ui/badge
  - @/components/ui/button
  - @/components/ui/card
  - lucide-react
  - @/data/projects
- **Props Interface**: No
- **Hooks Used**: useState
- **Styling**: Tailwind/CSS Classes

## ./components/footer.tsx

```tsx
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ID Portfolio</h3>
            <p className="text-sm text-foreground">
              Innovative instructional design solutions that bridge research, learning science, and real-world
              application.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-sm text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-foreground">
          <p>&copy; {new Date().getFullYear()} ID Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


```

### Analysis

- **Type**: Function Component
- **Imports**: 2 dependencies
  - next/link
  - lucide-react
- **Props Interface**: No
- **Hooks Used**: None
- **Styling**: Tailwind/CSS Classes

## ./components/header.tsx

```tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            ID Portfolio
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-b"
        >
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}


```

### Analysis

- **Type**: Client Component
- **Imports**: 8 dependencies
  - react
  - next/link
  - next/navigation
  - @/lib/utils
  - @/components/ui/button
  - @/components/theme-toggle
  - lucide-react
  - framer-motion
- **Props Interface**: No
- **Hooks Used**: useState, useEffect, usePathname
- **Styling**: Tailwind/CSS Classes

