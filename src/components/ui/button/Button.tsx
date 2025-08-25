'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import './Button.style.css'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outlinePrimary: 'btn-outline-primary',
      disabled: 'btn-disabled',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isDisabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      isDisabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    if (asChild && isDisabled) {
      return (
        <span
          className={cn(buttonVariants({ variant: 'disabled' }), className)}
          aria-disabled="true"
        >
          {children}
        </span>
      )
    }

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant: isDisabled ? 'disabled' : variant }),
          className,
        )}
        disabled={!asChild ? isDisabled : undefined}
        aria-disabled={isDisabled || undefined}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
