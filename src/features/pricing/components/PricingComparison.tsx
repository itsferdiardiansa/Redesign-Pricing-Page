'use client'

import pricingPlans from '@/constants/pricing-plans'
import planFeatures from '@/constants/plan-features'
import { usePricing } from '@/context/PricingContext'
import { PricingComparisonTable } from './PricingComparisonTable'
import '../styles/PricingComparison.style.css'

export const PricingComparison = () => {
  const { billing: billingCycle } = usePricing()

  const totals = pricingPlans.map((plan) =>
    planFeatures.reduce((sum, feature) => {
      const tier = feature.tiers.find((t) => t.tierId === plan.id)
      if (!tier?.value) return sum
      return sum + tier.value
    }, 0),
  )

  return (
    <div className="pricing-comparison-desktop">
      <PricingComparisonTable billingCycle={billingCycle} totals={totals} />
    </div>
  )
}
