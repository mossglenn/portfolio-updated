import * as React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'

const SkewedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref): React.ReactElement => {
    return (
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      <div className="-skew-x-20 transform rounded-lg bg-accent transition hover:bg-accent/90">
        <Button ref={ref} className={className} variant={'skewed'} {...props}>
          {children}
        </Button>
      </div>
    )
  }
)
SkewedButton.displayName = 'SkewedButton'
export { SkewedButton }
