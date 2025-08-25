"use client"

import { ReactNode } from "react"
import { useAccordionContext } from "./Accordion"

type AccordionContentProps = {
  children: ReactNode
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { openItem } = useAccordionContext()
  return <div className="accordion-content">{children}</div>
}