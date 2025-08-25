"use client"

import { ReactNode, MouseEventHandler } from "react"
import { useAccordionContext } from "./Accordion"
import { cn } from "@/utils/cls"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

type AccordionTriggerProps = {
  children: ReactNode
  className?: string
}

export const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { openItem, setOpenItem, type, collapsible } = useAccordionContext()

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const parent = (e.currentTarget.parentElement as HTMLElement)
    const value = parent.dataset.value
    if (!value) return
    if (type === "single") {
      if (openItem === value && collapsible) setOpenItem(null)
      else setOpenItem(value)
    }
  }

  return (
    <div 
      className={cn("accordion-trigger", className)} 
      onClick={handleClick}
      role="button"
    >
      {children}
      <span className="arrow">{openItem ? (
        <IoChevronUpOutline />
      ) : (
        <IoChevronDownOutline />
      )}</span>
    </div>
  )
}