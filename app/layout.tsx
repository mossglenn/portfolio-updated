import { Plus_Jakarta_Sans } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import { type ReactElement } from 'react'

import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'

import type { Metadata } from 'next'
import type React from 'react'

import './globals.css'

// Initialize the Plus Jakarta Sans font
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  // Include multiple weights for design flexibility
  weight: ['300', '400', '500', '600', '700', '800'],
  // Optional: specify a variable name to use in CSS
  variable: '--font-plus-jakarta-sans',
})

//initialize Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.description}`,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
