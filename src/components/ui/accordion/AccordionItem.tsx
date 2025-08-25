"use client"

import { ReactNode } from "react"
import { useAccordionContext } from "./Accordion"
import { cn } from "@/utils/cls"

type AccordionItemProps = {
  children: ReactNode
  value: string | number
}

export const AccordionItem = ({ children, value }: AccordionItemProps) => {
  const { openItem, setOpenItem, type, collapsible } = useAccordionContext()

  const isOpen = openItem === value.toString()

  // const handleClick = () => {
  //   if (type === "single") {
  //     if (isOpen && collapsible) setOpenItem(null)
  //     else setOpenItem(value.toString())
  //   }
  // }

  return (
    <div className={cn("accordion-item", isOpen && "open")} data-value={value}>
      {children && typeof children === "object"
        ? Array.isArray(children)
          ? children.map((child, idx) => child)
          : children
        : null}
    </div>
  )
}