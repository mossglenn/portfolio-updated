"use client"

import React from "react"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Process the markdown content to handle special formatting
  const processedContent = React.useMemo(() => {
    return (
      content
        // Convert bold text with ** to <strong>
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Convert italic text with * to <em>
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        // Convert horizontal rules
        .replace(/^---$/gm, '<hr class="my-6 border-t border-gray-300 dark:border-gray-700" />')
        // Convert emoji to span with larger font
        .replace(/([\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/gu, '<span class="text-2xl mr-2">$1</span>')
    )
  }, [content])

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}

