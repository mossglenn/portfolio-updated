import { type ReactElement } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Instructional Design Portfolio',
  description:
    'Explore my portfolio of innovative instructional design projects and educational solutions',
}

export default function PortfolioPage(): ReactElement {
  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-bold">Portfolio</h1>
      <p>Portfolio content will be added here.</p>
    </div>
  )
}
