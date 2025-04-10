import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'animated-gradient animated-gradient-hover bg-primary text-foreground hover:bg-gradient-brand',
        destructive: 'bg-destructive text-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-foreground',
        secondary: 'bg-accent text-background hover:bg-gradient-brand hover:text-foreground',
        ghost: 'hover:bg-accent hover:text-accent',
        link: 'text-primary underline-offset-4 hover:underline',
        skewed: 'skew-x-20 bg-none p-0 text-secondary hover:text-foreground',
        none: 'bg-none',
        display:
          'animated-gradient animated-gradient-hover bg-primary font-display text-xl font-bold text-foreground hover:bg-gradient-brand',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
        supersized: 'size-24',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
