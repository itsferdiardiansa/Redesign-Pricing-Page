"use client"

import useEmblaCarousel from "embla-carousel-react"
import { PricingCard } from "./PricingCard"
import { PricingSwitcher } from "./PricingSwitcher"
import { PricingComparison } from "./PricingComparison"
import { PricingProvider } from "@/context/PricingContext"
import pricingPlans from "@/constants/pricing-plans"
import { PricingPlan } from "@/features/types/Pricing.types"
import "../styles/Pricing.style.css"
import { PricingComparisonMobile } from "./PricingComparisonMobile"

export const Pricing = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false })

  return (
    <PricingProvider>
      <div className="pricing-container">
        <div className="pricing-plans">
          <div className="pricing-plans-header">
            <div className="pricing-plans-title">
              Choose the plans that fits your finances
            </div>
            <PricingSwitcher />
          </div>

          {/* Mobile carousel */}
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {pricingPlans.map((plan: PricingPlan, idx: number) => (
                  <div className="embla__slide" key={idx}>
                    <PricingCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-comparison">
          <div className="pricing-plans-header">
            <div className="pricing-plans-title">
              Explore the best plan for your business
            </div>
          </div>
          
          <PricingComparison />
          <PricingComparisonMobile />
        </div>
      </div>
    </PricingProvider>
  )
}