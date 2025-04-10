'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Users, BarChart, Layers, BookOpen, Code } from 'lucide-react'

const skills = [
  {
    icon: <Lightbulb className="size-10 text-brand" />,
    title: 'Learning Strategy',
    description:
      'Developing comprehensive learning strategies aligned with organizational goals and learner needs.',
  },
  {
    icon: <Users className="size-10 text-brand" />,
    title: 'User-Centered Design',
    description:
      'Creating learning experiences that prioritize the needs, preferences, and contexts of the learners.',
  },
  {
    icon: <BarChart className="size-10 text-brand" />,
    title: 'Data-Driven Approach',
    description:
      'Utilizing analytics and research to inform design decisions and measure learning outcomes.',
  },
  {
    icon: <Layers className="size-10 text-brand" />,
    title: 'Multimedia Development',
    description:
      'Producing engaging video, audio, and interactive content to enhance learning experiences.',
  },
  {
    icon: <BookOpen className="size-10 text-brand" />,
    title: 'Curriculum Design',
    description:
      'Structuring comprehensive learning programs with clear objectives and assessment strategies.',
  },
  {
    icon: <Code className="size-10 text-brand" />,
    title: 'Educational Technology',
    description:
      'Leveraging cutting-edge tools and platforms to create innovative learning solutions.',
  },
]

export default function Skills() {
  return (
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Expertise & Skills</h2>
          <p className="max-w-2xl text-foreground">
            Combining instructional design principles with innovative approaches to create impactful
            learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
