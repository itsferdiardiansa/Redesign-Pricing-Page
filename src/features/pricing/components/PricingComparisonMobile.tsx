'use client'

import Link from 'next/link'
import pricingPlans from '@/constants/pricing-plans'
import planFeatures from '@/constants/plan-features'
import { usePricing } from '@/context/PricingContext'
import { PricingValueItem } from '@/features/pricing/types/Pricing.types'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getPlanPrice } from '../_utils/computed-price'
import { cn, formatCurrency } from '@/utils'
import '../styles/PricingComparisonMobile.style.css'

export const PricingComparisonMobile = () => {
  const { billing: billingCycle } = usePricing()

  return (
    <div className="pricing-comparison-mobile">
      <Accordion type="single" collapsible>
        {pricingPlans.map((plan, index) => {
          const { amount, discount } = plan.price
          const { finalPrice } = getPlanPrice(amount, discount, billingCycle)

          return (
            <AccordionItem key={plan.id} value={index} data-value={plan.id}>
              <AccordionTrigger
                className={cn(plan.isRecommended && 'highlighted')}
              >
                <div className="plan-header">
                  <span className="font-medium">{plan.name}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="plan-features">
                  {planFeatures.map((feature) => {
                    const tier = feature.tiers.find(
                      (t) => t.tierId === plan.id,
                    ) as PricingValueItem['tiers'][number]

                    const value = tier
                      ? tier.label
                        ? `${tier.label}${
                            tier.value ? ` - ${formatCurrency(tier.value)}` : ''
                          }`
                        : formatCurrency(tier.value)
                      : '—'

                    return (
                      <li key={feature.name} className="plan-feature">
                        <span className="plan-feature-name">
                          {feature.name}
                        </span>
                        <span className="plan-feature-value">{value}</span>
                      </li>
                    )
                  })}
                </ul>

                <div className="plan-cta">
                  <Button variant="primary" asChild>
                    <Link href={plan.cta.link}>
                      Pay {formatCurrency(finalPrice)} /
                      {billingCycle === 'monthly' ? 'month' : 'year'}
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
