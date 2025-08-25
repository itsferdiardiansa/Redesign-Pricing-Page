"use client"

import Link from "next/link"
import pricingPlans from "@/constants/pricing-plans"
import planFeatures from "@/constants/plan-features"
import { usePricing } from "@/context/PricingContext"
import { PricingValueItem } from "@/features/types/Pricing.types"
import { getPlanPrice } from "../_utils/computed-price"
import { cn, formatCurrency } from "@/utils"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import "../styles/PricingComparisonMobile.style.css"

export const PricingComparisonMobile = () => {
  const { billing: billingCycle } = usePricing()
  
  return (
    <div className="pricing-comparison-mobile">
      <Accordion type="single" collapsible>
        {pricingPlans.map((plan) => {
          const { amount, discount } = plan.price
          const { finalPrice } = getPlanPrice(amount, discount, billingCycle)

          return (
            <AccordionItem key={plan.id} value={plan.id} data-value={plan.id}>
              <AccordionTrigger className={cn(plan.isRecommended && "highlighted")}>
                <div className="plan-header">
                  {/* {plan.isRecommended && (
                    <span className="badge">Recommended</span>
                  )} */}
                  <span className="font-medium">{plan.name}</span>
                  {/* <p className="text-sm text-muted-foreground">
                    <span className="currency">{plan.price.currency}</span>
                    {formatCurrency(finalPrice, "decimal")} / {billingCycle}
                  </p> */}
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="plan-features">
                  {planFeatures.map((feature) => {
                    const tier = feature.tiers.find(
                      (t) => t.tierId === plan.id
                    ) as PricingValueItem["tiers"][number]

                    const value = tier
                      ? tier.label
                        ? `${tier.label}${
                            tier.value ? ` - ${formatCurrency(tier.value)}` : ""
                          }`
                        : formatCurrency(tier.value)
                      : "—"

                    return (
                      <li
                        key={feature.name}
                        className="plan-feature"
                      >
                        <span className="plan-feature-name">{feature.name}</span>
                        <span className="plan-feature-value">{value}</span>
                      </li>
                    ) 
                  })}
                </ul>

                <div className="plan-cta">
                  <Button variant="primary" asChild>
                    <Link href={plan.cta.link}>
                      Pay {" "}
                      {formatCurrency(finalPrice)} /{billingCycle === "monthly" ? "month" : "year"}
                    </Link>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}