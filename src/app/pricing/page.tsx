import { FAQList } from "@/features/faq/components/FAQ"
import { Pricing } from "@/features/pricing/components/Pricing"
import { HiMiniQuestionMarkCircle } from "react-icons/hi2"
import "./PricingPage.style.css"

export default function PricingPage() {
  return (
    <div className="section-stacks">
      <div className="section">
        <div className="section-content">
          <Pricing />
        </div>
      </div>

      <div className="section section-column">
        <div className="section-header">
          <div className="section-badge">
            <HiMiniQuestionMarkCircle className="icon" />
            <span>FAQ&apos;s</span>
          </div>
          <h2 className="section-title">
            Everything You Need to Know About TurnBnB
          </h2>
        </div>
        
        <div className="section-content">
          <FAQList />
        </div>
      </div>
    </div>
  )
}