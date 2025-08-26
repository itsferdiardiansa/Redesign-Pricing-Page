'use client'

import faqData from '@/constants/faq'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import '../styles/FAQ.style.css'

export const FAQList: React.FC = () => {
  return (
    <div className="faq-container">
      <Accordion
        className="faq-list"
        type="multiple"
        defaultValue="0"
        collapsible
      >
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={String(index)} className="faq-item">
            <AccordionTrigger className="faq-trigger">
              <span className="faq-title">{faq.question}</span>
            </AccordionTrigger>

            <AccordionContent className="faq-content">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
