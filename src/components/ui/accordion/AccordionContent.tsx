'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { useAccordionContext } from './Accordion'
import { cn } from '@/utils'

type AccordionContentProps = {
  className?: string
  children: ReactNode
}

export const AccordionContent = ({
  children,
  className,
}: AccordionContentProps) => {
  const { openItems } = useAccordionContext()
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const parent = el.parentElement as HTMLElement
    const value = parent?.dataset.value

    if (!value) return

    if (openItems.includes(value)) {
      el.style.maxHeight = el.scrollHeight + 'px'
      el.style.opacity = '1'
    } else {
      el.style.maxHeight = '0px'
      el.style.opacity = '0'
    }
  }, [openItems])

  return (
    <div
      ref={contentRef}
      className="accordion-content"
      style={{
        maxHeight: '0px',
        opacity: 0,
      }}
    >
      <div className={cn('accordion-content-wrapper', className)}>
        {children}
      </div>
    </div>
  )
}
