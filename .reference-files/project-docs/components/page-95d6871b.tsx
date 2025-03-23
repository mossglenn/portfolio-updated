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
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Passionate instructional designer with expertise in creating innovative, research-based learning
              experiences.
            </p>
            <div className="space-y-4 text-muted-foreground">
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
          <div className="relative h-[400px] overflow-hidden rounded-lg">
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
          <div className="mb-8 flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">My Approach</h2>
            <p className="max-w-2xl text-muted-foreground">
              I believe in creating learning experiences that are evidence-based, learner-centered, and results-driven.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
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
        <div className="mb-8 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Education & Certifications</h2>
          <p className="max-w-2xl text-muted-foreground">
            Continuous learning is a core value that drives my professional development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Ph.D. in Learning Sciences</h3>
                <p className="text-muted-foreground">University of Education, 2018</p>
              </div>
              <div>
                <h3 className="font-semibold">M.Ed. in Instructional Design</h3>
                <p className="text-muted-foreground">Design Institute, 2014</p>
              </div>
              <div>
                <h3 className="font-semibold">B.A. in Psychology</h3>
                <p className="text-muted-foreground">State University, 2012</p>
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
                <p className="text-muted-foreground">Association for Talent Development</p>
              </div>
              <div>
                <h3 className="font-semibold">Learning Experience Design Certificate</h3>
                <p className="text-muted-foreground">Design Academy</p>
              </div>
              <div>
                <h3 className="font-semibold">Accessibility in Learning Design</h3>
                <p className="text-muted-foreground">Inclusive Learning Institute</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

