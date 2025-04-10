import { Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { siteConfig } from '@/config/site'

export function Footer(): ReactElement {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-lg font-medium">{siteConfig.name}</div>
          <div className="flex items-center gap-6">
            <Link
              className="text-foreground transition-colors hover:text-brand"
              href={`mailto:${siteConfig.contact.email}`}
            >
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              className="text-foreground transition-colors hover:text-brand"
              href={siteConfig.links.linkedin}
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              className="text-foreground transition-colors hover:text-brand"
              href={siteConfig.links.github}
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="text-sm text-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
