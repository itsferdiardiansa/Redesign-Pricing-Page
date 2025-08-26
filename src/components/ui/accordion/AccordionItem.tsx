'use client'

import { cn } from '@/utils/cls'
import { useAccordionContext } from './Accordion'

type AccordionItemProps = {
  value: string | number
  children: React.ReactNode
  className?: string
}

export const AccordionItem = ({
  value,
  children,
  className,
}: AccordionItemProps) => {
  const { openItems } = useAccordionContext()
  const isOpen = value ? openItems.includes(value as string) : false

  return (
    <div
      className={cn('accordion-item', className)}
      data-value={value}
      data-collapse={isOpen}
    >
      {children}
    </div>
  )
}
