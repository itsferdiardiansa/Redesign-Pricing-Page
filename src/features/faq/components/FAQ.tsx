'use client'

import faqData from "@/constants/faq"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const FAQList: React.FC = () => {
  return (
    <div className="faq-container">
      <Accordion type="single" collapsible>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={String(index)} className="faq-item">
            <AccordionTrigger className="faq-trigger">
              <span className="faq-title">{faq.question}</span>
            </AccordionTrigger>

            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}