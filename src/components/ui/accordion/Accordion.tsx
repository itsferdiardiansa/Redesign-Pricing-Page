'use client'

import { useState, createContext, useContext } from 'react'
import './Accordion.style.css'

type AccordionContextType = {
  openItems: string[]
  toggleItem: (value: string) => void
  type: 'single' | 'multiple'
  collapsible: boolean
}
type AccordionProps = {
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string
  children: React.ReactNode
}

const AccordionContext = createContext<AccordionContextType>({
  openItems: [],
  toggleItem: () => {},
  type: 'single',
  collapsible: false,
})

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context)
    throw new Error('Accordion components must be used within Accordion')
  return context
}

export function Accordion({
  type = 'single',
  collapsible = false,
  defaultValue = '0',
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([defaultValue])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (type === 'single') {
        if (prev.includes(value)) {
          return collapsible ? [] : prev
        }
        return [value]
      }

      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    })
  }

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, type, collapsible }}
    >
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  )
}
