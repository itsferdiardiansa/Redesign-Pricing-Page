"use client"

import { useState, ReactNode, createContext, useContext } from "react"
import "./Accordion.style.css"
// import { cn } from "@/utils/cls"

type AccordionContextType = {
  openItem: string | null
  setOpenItem: (id: string | null) => void
  type: "single" | "multiple"
  collapsible?: boolean
}

const AccordionContext = createContext<AccordionContextType | null>(null)
export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) throw new Error("Accordion components must be used within Accordion")
  return context
}

type AccordionProps = {
  children: ReactNode
  type?: "single" | "multiple"
  collapsible?: boolean
}

export const Accordion = ({ children, type = "single", collapsible = false }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, type, collapsible }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  )
}