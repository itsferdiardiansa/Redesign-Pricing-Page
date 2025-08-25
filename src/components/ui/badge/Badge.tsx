'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'
import './Badge.style.css'

const badgeVariants = cva('badge', {
  variants: {
    variant: {
      outlinePrimary: 'badge-outline-primary',
    },
  },
  defaultVariants: {
    variant: 'outlinePrimary',
  },
})

export interface BadgeProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span className={cn(badgeVariants({ variant }), className)} {...props} />
    )
  },
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
