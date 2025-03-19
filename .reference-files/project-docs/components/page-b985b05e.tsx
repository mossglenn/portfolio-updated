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

