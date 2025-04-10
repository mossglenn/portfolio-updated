import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ID Portfolio</h3>
            <p className="text-sm text-foreground">
              Innovative instructional design solutions that bridge research, learning science, and real-world
              application.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-foreground transition-colors hover:text-brand">
                Home
              </Link>
              <Link href="/portfolio" className="text-sm text-foreground transition-colors hover:text-brand">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-foreground transition-colors hover:text-brand">
                About
              </Link>
              <Link href="/contact" className="text-sm text-foreground transition-colors hover:text-brand">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="size-5 text-foreground transition-colors hover:text-brand" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="size-5 text-foreground transition-colors hover:text-brand" />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="size-5 text-foreground transition-colors hover:text-brand" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-foreground">
          <p>&copy; {new Date().getFullYear()} ID Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

