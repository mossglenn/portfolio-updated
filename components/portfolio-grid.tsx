'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { getAllProjects, getAllTags } from '@/data/projects'

// Get all projects
const projects = getAllProjects()

// Get all tags
const allTags = ['All', ...getAllTags()]

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section className="container px-4 md:px-6">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {allTags.map((filter) => (
          <Badge
            key={filter}
            variant={activeFilter === filter ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg?height=600&width=800'}
                  alt={project.label}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
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
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href={project.path}>
                    View Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
