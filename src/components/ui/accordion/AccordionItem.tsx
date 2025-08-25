"use client"

import { cn } from "@/utils/cls"

type AccordionItemProps = {
  value: string | number
  children: React.ReactNode
  className?: string
}

export const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <div
      className={cn("accordion-item", className)}
      data-value={value}
    >
      {children}
    </div>
  )
}