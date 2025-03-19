export type ProjectTag = string

export interface Project {
  label: string
  subLabel: string
  path: string // Changed from href to path to reflect file system path
  tags: ProjectTag[]
  image?: string
}

export interface ProjectCategory {
  label: string
  subLabel: string
  children: Project[]
}

export const projectCategories: ProjectCategory[] = [
  {
    label: "Making Learning Personal and Data-Driven",
    subLabel: "Personalized, adaptive learning experiences that respond to learners' needs in real time.",
    children: [
      {
        label: "Personalizing Learning with Adaptive and Data-Driven Design",
        subLabel:
          "See how adaptive tools personalize learning through real-time feedback and learner-centered pathways.",
        path: "/portfolio/adaptive-learning",
        tags: ["Adaptive Learning", "Personalization", "Data-Driven", "EdTech", "Real-Time Feedback"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Designing Instruction for Adaptive Learning",
        subLabel:
          "Learn how instructional design principles translate research into effective adaptive learning experiences.",
        path: "/portfolio/instruction-based-on-adaptive-learning-technologies",
        tags: ["Adaptive Learning", "Instructional Design", "Learning Science", "Data-Driven"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Smarter Course Design for Higher Ed",
        subLabel:
          "See how thoughtful instructional design makes higher ed courses clearer, more engaging, and accessible.",
        path: "/portfolio/higher-ed-course-design",
        tags: ["Higher Education", "Course Design", "Engagement", "Accessibility"],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    label: "Learning through Games and Play",
    subLabel: "Game-based and playful learning designs that engage learners with challenging concepts.",
    children: [
      {
        label: "Collaborative Game-Based Learning Design",
        subLabel: "Explore how interdisciplinary teams create game-based learning experiences that engage and teach.",
        path: "/portfolio/game-based-instructional-design",
        tags: ["Game-Based Learning", "Interdisciplinary", "Collaboration", "Engagement"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Gamifying Complex Topics for More Efficient Learning",
        subLabel:
          "See how gamification and personalization transform challenging subjects into engaging and accessible learning experiences.",
        path: "/portfolio/gamified-statistics-tutor",
        tags: ["Gamification", "Personalization", "Adaptive Learning", "Engagement", "STEM"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Play-Based STEM Learning",
        subLabel: "See how play-based experiences turn engineering and physics into real learning for kids—at scale.",
        path: "/portfolio/play-based-stem",
        tags: ["STEM", "Play-Based Learning", "Hands-On Learning", "Scalable Learning"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Can You Adapt? Rethinking Accessibility through Play",
        subLabel: "Experience a game that flips accessibility expectations—what happens when the tables are turned?",
        path: "/portfolio/the-invisible-game",
        tags: ["Accessibility", "Inclusive Design", "Game-Based Learning", "User Experience"],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    label: "Designing for Ethics, Inclusion, and Trust",
    subLabel: "Training that goes beyond compliance to foster ethical action, inclusion, and cultural humility.",
    children: [
      {
        label: "Designing Compliance Training for Real Impact",
        subLabel:
          "Explore how engaging, scenario-based learning goes beyond compliance to support ethical research and data security.",
        path: "/portfolio/researcher-ethics-training",
        tags: ["Compliance Training", "Ethics", "Scenario-Based Learning", "Data Security"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Learning to Navigate Real-World SGM Inclusion",
        subLabel:
          "Explore practical, scenario-based strategies that build confidence and respect in real-life interactions.",
        path: "/portfolio/sgm-competency-training",
        tags: ["Inclusion", "Diversity & Equity", "Cultural Competency", "Scenario-Based Learning"],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    label: "Turning Research into Action",
    subLabel: "Helping researchers and innovators transform complex ideas into usable, actionable learning tools.",
    children: [
      {
        label: "Helping Researchers Turn Ideas into Impact",
        subLabel: "See how learning experiences make complex research usable and actionable in the real world.",
        path: "/portfolio/research-to-impact-instructional-design",
        tags: ["Research Communication", "Instructional Design", "Usability", "Grant Writing"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Connecting Researchers, Educators, and Industry Partners",
        subLabel:
          "See how collaboration and communication turn complex research into tools that drive real-world action.",
        path: "/portfolio/making-complex-ideas-click",
        tags: ["Interdisciplinary Collaboration", "Research Communication", "Industry Partnerships"],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    label: "Fast, Scalable Learning Solutions",
    subLabel: "Agile learning and microlearning strategies that deliver training at scale without sacrificing quality.",
    children: [
      {
        label: "Solving a Design Dilemma with Microlearning",
        subLabel: "Building digital literacy skills through microlearning that meets learners where they are.",
        path: "/portfolio/digital-literacy-microlearning",
        tags: ["Microlearning", "Digital Literacy", "Scalability", "User-Centered Design"],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        label: "Agile Design for Rapid Program Scaling",
        subLabel: "Learn how agile approaches power fast, scalable training for large, high-impact audiences.",
        path: "/portfolio/agile-science-communication",
        tags: ["Agile Learning Design", "Scalability", "Stakeholder Collaboration", "Science Communication"],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
]

// Helper function to get all projects in a flat array
export function getAllProjects(): Project[] {
  return projectCategories.flatMap((category) => category.children)
}

// Helper function to get all unique tags
export function getAllTags(): ProjectTag[] {
  const tagsSet = new Set<ProjectTag>()

  getAllProjects().forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag))
  })

  return Array.from(tagsSet).sort()
}

// Helper function to get a project by its path
export function getProjectByPath(path: string): Project | undefined {
  return getAllProjects().find((project) => project.path === path)
}

// Helper function to get a category by project path
export function getCategoryByProjectPath(path: string): ProjectCategory | undefined {
  return projectCategories.find((category) => category.children.some((project) => project.path === path))
}

// Helper function to get featured projects (one from each category)
export function getFeaturedProjects(count = 3): Project[] {
  // Get one project from each category until we reach the count
  const featured: Project[] = []

  for (const category of projectCategories) {
    if (featured.length >= count) break
    if (category.children.length > 0) {
      featured.push(category.children[0])
    }
  }

  return featured
}

export function getProjectByHref(href: string): Project | undefined {
  return getAllProjects().find((project) => project.path === href)
}

export function getCategoryByProjectHref(href: string): ProjectCategory | undefined {
  return projectCategories.find((category) => category.children.some((project) => project.path === href))
}

