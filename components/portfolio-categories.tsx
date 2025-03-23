'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectCategories } from '@/data/projects'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PortfolioCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (label: string) => {
    if (expandedCategory === label) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(label)
    }
  }

  return (
    <section className="container px-4 md:px-6">
      <h2 className="mb-6 text-2xl font-bold tracking-tighter">Categories</h2>
      <div className="space-y-6">
        {projectCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => toggleCategory(category.label)}>
                <div className="flex items-center justify-between">
                  <CardTitle>{category.label}</CardTitle>
                  <ChevronRight
                    className={`size-5 transition-transform ${expandedCategory === category.label ? 'rotate-90' : ''}`}
                  />
                </div>
                <CardDescription>{category.subLabel}</CardDescription>
              </CardHeader>

              {expandedCategory === category.label && (
                <CardContent>
                  <div className="space-y-4">
                    {category.children.map((project) => (
                      <div
                        key={project.path}
                        className="rounded-md border p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{project.label}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{project.subLabel}</p>
                          </div>
                          <Button asChild variant="ghost" size="sm">
                            <Link href={project.path}>
                              View
                              <ChevronRight className="ml-1 size-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
