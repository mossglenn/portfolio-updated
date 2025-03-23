import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'

/**
 * Common component prop types
 */

// Layout component types
export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'default' | 'lg' | 'full'
}

export interface SectionProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
}

export interface PageLayoutProps {
  children: ReactNode
  header?: ReactNode
  footer?: boolean
}

// UI component types
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

// Common component types
export interface GradientTextProps {
  children: ReactNode
  variant: 'ochre' | 'slate' | 'sage' | 'warm-dark' | 'light-wash'
  className?: string
}
