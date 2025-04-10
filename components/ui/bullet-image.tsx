import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const bulletImageVariants = cva(
  'inline-block' ,
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
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

export default function BulletImage(): ReactElement {

const BubbleIcon = ({ className = 'w-5 h-5', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28.39 14.63"
    className={className}
    {...props}
  >
    <g>
      <path
        d="M4.13,13.9c3.64,1.76,8.01.23,9.77-3.4h1.3c.6,0,1.17-.24,1.59-.66l.14-.14c.44-.44,1.15-.44,1.59,0l.8.8c.44.44,1.15.44,1.59,0l.8-.8c.44-.44,1.15-.44,1.59,0l.8.8c.44.44,1.15.44,1.59,0l2.39-2.39c.44-.44.44-1.15,0-1.59l-1.73-1.73c-.42-.42-.99-.66-1.59-.66h-10.84c-.72-1.49-1.92-2.68-3.4-3.4C6.86-1.03,2.49.5.73,4.13c-1.76,3.64-.23,8.01,3.4,9.77ZM3.71,8.84c-.89-.89-.89-2.34,0-3.23s2.34-.89,3.23,0,.89,2.34,0,3.23-2.34.89-3.23,0Z"
        fill="currentColor"
      />
    </g>
  </svg>
)

export default BubbleIcon
