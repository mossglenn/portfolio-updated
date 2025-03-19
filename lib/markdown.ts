import type { Project } from "@/data/projects"

// Function to parse front matter from markdown content
export function parseFrontMatter(markdown: string): {
  frontMatter: Record<string, any>
  content: string
} {
  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/
  const match = markdown.match(frontMatterRegex)

  if (!match) {
    return {
      frontMatter: {},
      content: markdown,
    }
  }

  const frontMatterString = match[1]
  const content = markdown.slice(match[0].length).trim()

  // Parse the front matter
  const frontMatter: Record<string, any> = {}
  const lines = frontMatterString.split("\n")

  for (const line of lines) {
    const colonIndex = line.indexOf(":")
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()

      // Remove quotes if present
      if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1)
      }
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      // Handle arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          // This is a simplified approach - a real parser would be more robust
          const arrayString = value.replace(/'/g, '"')
          frontMatter[key] = JSON.parse(arrayString)
        } catch (e) {
          frontMatter[key] = value
        }
      } else {
        frontMatter[key] = value
      }
    }
  }

  return { frontMatter, content }
}

// Convert markdown content to HTML (simplified version)
export function markdownToHtml(markdown: string): string {
  // This is a very simplified markdown to HTML converter
  // In a real application, you would use a library like marked or remark

  let html = markdown
    // Convert headers
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")

    // Convert emphasis
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // Convert lists
    .replace(/^- (.*$)/gm, "<li>$1</li>")

    // Convert horizontal rules
    .replace(/^---$/gm, "<hr />")

  // Wrap list items in ul tags
  html = html.replace(/<li>.*?<\/li>(\n<li>.*?<\/li>)*/gs, (match) => {
    return `<ul>${match}</ul>`
  })

  // Convert paragraphs (any line that's not already converted)
  html = html.replace(/^(?!<[hl\d]|<ul|<hr)(.*$)/gm, "<p>$1</p>")

  return html
}

// Function to convert markdown project to Project type
export function markdownToProject(markdown: string, defaultImage = "/placeholder.svg?height=600&width=800"): Project {
  const { frontMatter, content } = parseFrontMatter(markdown)

  return {
    label: frontMatter.title || "Untitled Project",
    subLabel: frontMatter.description || "",
    path: `/portfolio/${frontMatter.path || "untitled-project"}`,
    tags: frontMatter.tags || [],
    image: frontMatter.image || defaultImage,
    content: content,
    category: frontMatter.category || "Uncategorized",
  }
}

