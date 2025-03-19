"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, BarChart, Layers, BookOpen, Code } from "lucide-react"

const skills = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Learning Strategy",
    description: "Developing comprehensive learning strategies aligned with organizational goals and learner needs.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "User-Centered Design",
    description: "Creating learning experiences that prioritize the needs, preferences, and contexts of the learners.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Data-Driven Approach",
    description: "Utilizing analytics and research to inform design decisions and measure learning outcomes.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Multimedia Development",
    description: "Producing engaging video, audio, and interactive content to enhance learning experiences.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Curriculum Design",
    description: "Structuring comprehensive learning programs with clear objectives and assessment strategies.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Educational Technology",
    description: "Leveraging cutting-edge tools and platforms to create innovative learning solutions.",
  },
]

export default function Skills() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Expertise & Skills</h2>
          <p className="text-muted-foreground max-w-2xl">
            Combining instructional design principles with innovative approaches to create impactful learning
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

