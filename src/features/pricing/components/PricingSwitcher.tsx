"use client"

import { usePricing } from "@/context/PricingContext"
import { cn } from "@/utils/cls"
import "../styles/PricingSwitcher.style.css"

export const PricingSwitcher = () => {
  const { billing, setBilling } = usePricing()

  return (
    <div className="pricing-switcher">
      <div className="pricing-label">
        Bill me
      </div>
      <div className="pricing-switcher-container">
        <div 
          className={cn("pricing-switcher-option", billing === "monthly" && "active")}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </div>
        <div 
          className={cn("pricing-switcher-option", billing === "yearly" && "active")}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </div>
      </div>
    </div>
  )
}