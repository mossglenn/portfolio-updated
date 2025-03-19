"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg bg-primary text-primary-foreground p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Collaborate?</h2>
            <p className="text-lg md:text-xl max-w-2xl">
              Let's discuss how we can create innovative learning solutions that drive real impact for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white/10 px-8"
              >
                <Link href="/portfolio">Explore Portfolio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

