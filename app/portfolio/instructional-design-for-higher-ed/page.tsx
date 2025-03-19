import type { Metadata } from "next"
import { getProjectByPath, getCategoryByProjectPath } from "@/data/projects"
import ProjectLayout from "@/components/project-layout"

export const metadata: Metadata = {
  title: "Smarter Course Design for Higher Ed | Portfolio",
  description:
    "See how thoughtful instructional design makes higher ed courses clearer, more engaging, and accessible.",
}

export default function HigherEdCoursePage() {
  const project = getProjectByPath("/portfolio/instructional-design-for-higher-ed")
  const category = getCategoryByProjectPath("/portfolio/instructional-design-for-higher-ed")

  if (!project) {
    return <div>Project not found</div>
  }

  const content = {
    fullDescription: `
      <p>This project transformed a traditional lecture-based university course into an engaging, accessible, and pedagogically sound learning experience for diverse student populations.</p>
      
      <h3>The Challenge</h3>
      <p>A university department needed to redesign a core course that had high drop rates, poor student evaluations, and wasn't meeting the needs of an increasingly diverse student population.</p>
      
      <h3>The Solution</h3>
      <p>I designed a comprehensive course redesign that:</p>
      <ul>
        <li>Restructured content into modular, scaffolded learning pathways</li>
        <li>Incorporated universal design for learning principles throughout</li>
        <li>Developed authentic assessments aligned with real-world applications</li>
        <li>Created multimodal learning resources to support different learning preferences</li>
        <li>Integrated formative feedback opportunities throughout the learning journey</li>
      </ul>
      
      <h3>The Process</h3>
      <p>The redesign process was collaborative and evidence-based:</p>
      <ol>
        <li>Analysis of course data and student feedback to identify pain points</li>
        <li>Collaboration with faculty to clarify learning objectives and priorities</li>
        <li>Backward design process to align assessments with objectives</li>
        <li>Development of engaging learning activities and resources</li>
        <li>Implementation of accessibility features and inclusive design elements</li>
      </ol>
      
      <h3>The Results</h3>
      <p>The course redesign achieved remarkable improvements:</p>
      <ul>
        <li>Drop rate decreased from 28% to 8%</li>
        <li>Student satisfaction ratings increased by 45%</li>
        <li>Performance gaps between different student populations narrowed significantly</li>
        <li>Faculty reported more meaningful engagement with students</li>
      </ul>
    `,
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    client: "University Department",
    year: "2022",
    role: "Course Design Specialist",
  }

  return <ProjectLayout project={project} category={category} content={content} />
}

