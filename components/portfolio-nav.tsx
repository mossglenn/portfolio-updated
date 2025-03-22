'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { projectCategories } from '@/data/projects'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PortfolioNav() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (label: string) => {
    if (openCategory === label) {
      setOpenCategory(null)
    } else {
      setOpenCategory(label)
    }
  }

  return (
    <nav className="hidden lg:block">
      <ul className="space-y-1">
        {projectCategories.map((category) => (
          <li key={category.label}>
            <button
              onClick={() => toggleCategory(category.label)}
              className={cn(
                'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium',
                openCategory === category.label
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              )}
            >
              {category.label}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  openCategory === category.label ? 'rotate-180' : ''
                )}
              />
            </button>

            <AnimatePresence>
              {openCategory === category.label && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4"
                >
                  {category.children.map((project) => (
                    <li key={project.path}>
                      <Link
                        href={project.path}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {project.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  )
}
