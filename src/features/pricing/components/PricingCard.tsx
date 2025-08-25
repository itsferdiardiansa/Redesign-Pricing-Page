'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import pricingPlans from '@/constants/pricing-plans'
import { usePricing } from '@/context/PricingContext'
import {
  FilteredValueStack,
  PricingPlan,
  PricingValueItem,
} from '@/features/pricing/types/Pricing.types'
import { Button } from '@/components/ui/button'
import { cn, formatCurrency } from '@/utils'
import { getPlanPrice } from '../_utils/computed-price'
import '../styles/PricingCard.style.css'

type PricingCardProps = {
  plan: PricingPlan
}
export const PricingCard = ({ plan }: PricingCardProps) => {
  const { billing: billingCycle } = usePricing()
  const { amount, discount } = plan.price

  const hasDiscount = !!discount
  const { strikePrice, finalPrice, discountLabel } = getPlanPrice(
    amount,
    discount,
    billingCycle,
  )

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
    <div className={cn('pricing-card', plan.isRecommended && 'recommended')}>
      {plan.isRecommended && (
        <div className="recommended-badge">Recommended</div>
      )}

      <div className="pricing-card-top">
        <div className="pricing-card-detail">
          <div className="plan-name">{plan.name}</div>
          <div className="plan-description">{plan.description}</div>

          <div className="plan-price">
            <div className="price-detail">
              {strikePrice && (
                <span className="strikethrough-price">
                  {formatCurrency(strikePrice)}
                </span>
              )}

              <span className="amount-price">{formatCurrency(finalPrice)}</span>
            </div>
            <span className="period">
              {billingCycle === 'monthly' ? '/month' : '/year'}
            </span>
          </div>

          {hasDiscount && (
            <div className="plan-discount-info">Save {discountLabel}% off</div>
          )}
        </div>

        <div className="plan-cta">
          <Button
            variant={plan.isRecommended ? 'secondary' : 'primary'}
            asChild
          >
            <Link href={plan.cta.link}>{plan.cta.label}</Link>
          </Button>
        </div>
      </div>

      <div className="pricing-card-bottom">
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
    </div>
  )
}
