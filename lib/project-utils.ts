import { type Project, type ProjectCategory, getAllProjects, projectCategories } from "@/data/projects"
import { parseFrontMatter } from "./markdown"

// This would normally come from a file system or CMS
const projectMarkdownFiles: Record<string, string> = {
  "higher-ed-course-design": `---
title: 'Smarter Course Design for Higher Ed'
description:
          'See how thoughtful instructional design makes higher ed courses clearer, more engaging, and accessible.',
path: "higher-ed-course-design"
tags: [
          'Higher Education',
          'Course Design',
          'Engagement',
          'Accessibility',
        ]
category: 'Making Learning Personal and Data-Driven'
---

# Instructional Design for Higher Ed & Faculty Support

Faculty and instructors are experts in their fields, but they don't always have the time or resources to optimize their course materials for clarity, engagement, and accessibility. My work in higher education instructional design has focused on making instructional content clearer, easier to use, and more effective for both instructors and students. Through standardized course guides, improved instructional materials, and redesigned learning platforms, I have helped institutions streamline course delivery, enhance learning experiences, and improve usability for faculty and students alike.

---

## Key Projects

### 📖 Instructor Guides Project (Standardizing Course Delivery for Rotating Faculty)

- Developed structured **instructor guides** to help faculty transition seamlessly into courses with multiple rotating instructors.
- Observed **live courses** to document timing, instructional strategies, and learning activities, creating a consistent roadmap for future instructors.
- Ensured guides included **learning objectives, activity breakdowns, logistics, and student expectations**, making course prep more efficient and standardized.

---

### 📊 Slide Redesign (Improving Instructional Clarity & Engagement in Online Learning)

- **Redesigned instructional slide decks** to improve readability, engagement, and cognitive load management for online and blended courses.
- Applied **visual hierarchy, concise messaging, and multimedia integration** to create materials that supported better student comprehension.
- Ensured slides aligned with **evidence-based learning design principles**, making complex concepts easier to absorb.

---

### 🎓 ICRE LMS (Moodle Design & Management) (Enhancing Usability & Engagement in Learning Platforms)

- Led a **usability-focused redesign** of a higher ed **learning management system (LMS)** to make navigation more intuitive and accessible.
- Streamlined the **structure of course pages, resource organization, and student workflows**, reducing friction in online learning experiences.
- Improved **faculty training and onboarding materials** to ensure instructors could effectively use the platform without unnecessary complexity.

---

## Why It Matters

By making higher education instructional content more **accessible, organized, and engaging**, I have helped faculty deliver courses more effectively while enhancing student learning outcomes. Whether through **better course materials, improved LMS usability, or standardized instructional guides**, these projects demonstrate my ability to optimize instructional content for **clarity, efficiency, and impact**.`,
}

export function getProjectMarkdown(path: string): string | null {
  const slug = path.split("/").pop()
  if (!slug) return null

  return projectMarkdownFiles[slug] || null
}

export function getProjectContent(path: string): {
  content: string
  metadata: {
    client: string
    year: string
    role: string
    gallery: string[]
  }
} {
  const markdown = getProjectMarkdown(path)

  if (!markdown) {
    return {
      content: "",
      metadata: {
        client: "Client information not available",
        year: "Year not available",
        role: "Role not available",
        gallery: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
      },
    }
  }

  const { frontMatter, content } = parseFrontMatter(markdown)

  // You could extract client, year, role from frontMatter if available
  // For now, we'll use default values
  return {
    content,
    metadata: {
      client: frontMatter.client || "Educational Institution",
      year: frontMatter.year || "2022",
      role: frontMatter.role || "Instructional Designer",
      gallery: frontMatter.gallery || [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  }
}

// Function to get all project paths from markdown files
export function getAllProjectPaths(): string[] {
  return Object.keys(projectMarkdownFiles).map((slug) => `/portfolio/${slug}`)
}

// Function to update project data from markdown files
export function updateProjectsFromMarkdown(): Project[] {
  const projects = getAllProjects()

  // This would normally iterate through all markdown files
  // For now, we'll just update the one we have
  Object.entries(projectMarkdownFiles).forEach(([slug, markdown]) => {
    const { frontMatter } = parseFrontMatter(markdown)
    const path = `/portfolio/${slug}`

    // Find and update the project
    const projectIndex = projects.findIndex((p) => p.path === path)
    if (projectIndex !== -1) {
      projects[projectIndex] = {
        ...projects[projectIndex],
        label: frontMatter.title || projects[projectIndex].label,
        subLabel: frontMatter.description || projects[projectIndex].subLabel,
        tags: frontMatter.tags || projects[projectIndex].tags,
        // Keep the existing image if no new one is provided
        image: frontMatter.image || projects[projectIndex].image,
      }
    }
  })

  return projects
}

// Function to organize projects by category from markdown
export function getCategoriesFromMarkdown(): ProjectCategory[] {
  const categories: Record<string, ProjectCategory> = {}

  // Start with existing categories
  projectCategories.forEach((category) => {
    categories[category.label] = {
      ...category,
      children: [],
    }
  })

  // This would normally iterate through all markdown files
  // For now, we'll just process the one we have
  Object.entries(projectMarkdownFiles).forEach(([slug, markdown]) => {
    const { frontMatter } = parseFrontMatter(markdown)
    const categoryName = frontMatter.category

    if (!categoryName) return

    // Create category if it doesn't exist
    if (!categories[categoryName]) {
      categories[categoryName] = {
        label: categoryName,
        subLabel: "",
        children: [],
      }
    }

    // Add project to category
    categories[categoryName].children.push({
      label: frontMatter.title,
      subLabel: frontMatter.description,
      path: `/portfolio/${slug}`,
      tags: frontMatter.tags || [],
      image: frontMatter.image || "/placeholder.svg?height=600&width=800",
    })
  })

  return Object.values(categories)
}

