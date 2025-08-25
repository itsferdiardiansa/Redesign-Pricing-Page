"use client"

import { ReactNode, useEffect, useRef } from "react"
import { useAccordionContext } from "./Accordion"

type AccordionContentProps = {
  children: ReactNode
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { openItems } = useAccordionContext()
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const parent = el.parentElement as HTMLElement
    const value = parent?.dataset.value

    if (!value) return
    
    if (openItems.includes(value)) {
      el.style.maxHeight = el.scrollHeight + "px"
      el.style.opacity = "1"
    } else {
      el.style.maxHeight = "0px"
      el.style.opacity = "0"
    }
  }, [openItems])

  return (
    <div
      ref={contentRef}
      className="accordion-content"
      style={{
        maxHeight: "0px",
        opacity: 0,
      }}
    >
      <div className="accordion-content-wrapper">
        {children}
      </div>
    </div>
  )
}