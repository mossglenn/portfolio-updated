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
        <div className="mb-8 flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Get in Touch</h1>
          <p className="max-w-2xl text-xl text-foreground">
            Let&apos;s discuss how we can collaborate on your next instructional design project.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="size-6 text-primary" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">contact@example.com</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Phone className="size-6 text-primary" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">+1 (555) 123-4567</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="size-6 text-primary" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">San Francisco, CA</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
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
              <h2 className="mb-4 text-2xl font-bold tracking-tighter">Let&apos;s Collaborate</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  I&apos;m always interested in new projects and collaborations. Whether you have a specific project in mind
                  or just want to explore possibilities, I&apos;d love to hear from you.
                </p>
                <p>My expertise spans various areas of instructional design, including:</p>
                <ul className="list-disc space-y-2 pl-6">
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
              <h2 className="mb-4 text-2xl font-bold tracking-tighter">Availability</h2>
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

