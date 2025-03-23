import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project, ProjectCategory } from '@/data/projects'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import MarkdownContent from '@/components/markdown-content'

interface ProjectContent {
  fullDescription: string
  gallery: string[]
  client: string
  year: string
  role: string
}

interface ProjectLayoutProps {
  project: Project
  category?: ProjectCategory
  content: ProjectContent
  children?: ReactNode
}

export default function ProjectLayout({
  project,
  category,
  content,
  children,
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-12">
      <section className="container px-4 md:px-6">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/portfolio">
            <ChevronLeft className="mr-2 size-4" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              {category && (
                <div className="mb-2">
                  <Badge variant="outline" className="text-sm">
                    {category.label}
                  </Badge>
                </div>
              )}
              <h1 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                {project.label}
              </h1>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <p className="text-xl text-muted-foreground">{project.subLabel}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Client</h3>
                <p className="text-muted-foreground">{content.client}</p>
              </div>
              <div>
                <h3 className="font-semibold">Year</h3>
                <p className="text-muted-foreground">{content.year}</p>
              </div>
              <div>
                <h3 className="font-semibold">Role</h3>
                <p className="text-muted-foreground">{content.role}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.image || '/placeholder.svg?height=600&width=800'}
              alt={project.label}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {content.gallery.map((image, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={image || '/placeholder.svg'}
                alt={`${project.label} - Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {typeof content.fullDescription === 'string' &&
          content.fullDescription.startsWith('<') ? (
            <div dangerouslySetInnerHTML={{ __html: content.fullDescription }} />
          ) : (
            <MarkdownContent content={content.fullDescription} />
          )}
          {children}
        </div>
      </section>

      {category && category.children.length > 1 && (
        <section className="container border-t px-4 pt-8 md:px-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tighter">
            More Projects in {category.label}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.children
              .filter((p) => p.path !== project.path)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.path} className="overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedProject.image || '/placeholder.svg?height=600&width=800'}
                      alt={relatedProject.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{relatedProject.label}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {relatedProject.subLabel}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full justify-between">
                      <Link href={relatedProject.path}>
                        View Case Study
                        <ChevronRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      )}
    </div>
  )
}
