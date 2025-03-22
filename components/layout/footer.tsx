import Link from 'next/link'
import { Mail, Linkedin, Github } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-lg font-medium">{siteConfig.name}</div>
          <div className="flex items-center gap-6">
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.links.github}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
