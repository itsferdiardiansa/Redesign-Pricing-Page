"use client"

import { ReactNode, MouseEventHandler, useRef } from "react"
import { useAccordionContext } from "./Accordion"
import { cn } from "@/utils/cls"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

type AccordionTriggerProps = {
  children: ReactNode
  className?: string
}

export const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { openItems, toggleItem } = useAccordionContext()
  const triggerRef = useRef<HTMLDivElement | null>(null)

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    const e = triggerRef.current

    if (!e) return
    const parent = e.parentElement as HTMLElement
    const value = parent?.dataset.value
    if (!value) return
    toggleItem(value)
  }

  // const parentValue = (typeof window !== "undefined"
  //   ? (document?.activeElement?.parentElement as HTMLElement)?.dataset.value
  //   : null) || null
  
    // Always false
  const parentValue = triggerRef.current?.parentElement?.dataset.value
  const isOpen = parentValue ? openItems.includes(parentValue) : false
  
  return (
    <div
      ref={triggerRef}
      className={cn("accordion-trigger", className)}
      onClick={handleClick}
      role="button"
    >
      {children}
      <span className="arrow">
        {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </span>
    </div>
  )
}