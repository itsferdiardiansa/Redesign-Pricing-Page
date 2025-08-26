'use client'

import { useMemo } from 'react'
import pricingPlans from '@/constants/pricing-plans'
import {
  FilteredValueStack,
  PricingPlan,
  PricingValueItem,
} from '@/features/pricing/types/Pricing.types'
import '../styles/PricingCard.style.css'
import { cn } from '@/utils'
import '../styles/PricingFeatures.style.css'

type PricingFeaturesProps = {
  plan: PricingPlan
  isCustomizable?: boolean
}
export const PricingFeatures = ({
  plan,
  isCustomizable,
}: PricingFeaturesProps) => {
  const featureTitle =
    plan.id === 1
      ? 'Key features include'
      : `${pricingPlans[plan.id - 2].name} features, plus`

  const filteredValueStack = useMemo(() => {
    const prevPlanId = plan.id - 1

    return plan.valueStack
      .map((feature: PricingValueItem) => {
        const tiersSorted = [...feature.tiers].sort(
          (a, b) => a.tierId - b.tierId,
        )
        const current = tiersSorted.find((t) => t.tierId === plan.id)
        if (!current) return null

        const firstTierId = tiersSorted[0].tierId
        const isConstant = tiersSorted.every(
          (t) => t.value === tiersSorted[0].value,
        )

        if (isConstant && plan.id !== firstTierId) return null

        const prev = tiersSorted.find((t) => t.tierId === prevPlanId)
        if (!prev || prev.value !== current.value) {
          return {
            id: feature.name,
            name: feature.name,
            value: current.value,
            label: current.label,
          }
        }

        return null
      })
      .filter(Boolean) as FilteredValueStack[]
  }, [plan])

  return (
    <div
      className={cn(
        'pricing-features',
        plan.isRecommended && isCustomizable && 'recommended',
      )}
    >
      <div className="plan-feature-title">{featureTitle}</div>

      <div className="value-stack">
        {filteredValueStack.map((item) => (
          <div className="stack-item" key={item.id}>
            <div className="check-icon" />
            <div className="stack-text">
              {item.name}
              {item.label && ` (${item.label})`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
