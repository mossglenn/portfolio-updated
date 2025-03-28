import type React from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import { ReactElement } from 'react'

// Initialize the Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  // Include multiple weights for design flexibility
  weight: ['300', '400', '500', '600', '700', '800'],
  // Optional: specify a variable name to use in CSS
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.description}`,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} ${plusJakartaSans.variable} test-theme`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
