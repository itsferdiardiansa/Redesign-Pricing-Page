'use client'

import Link from 'next/link'
import pricingPlans from '@/constants/pricing-plans'
import planFeatures from '@/constants/plan-features'
import { BillingCycle } from '@/context/PricingContext'
import { PricingValueItem } from '@/features/pricing/types/Pricing.types'
import { Button } from '@/components/ui/button'
import { cn, formatCurrency } from '@/utils'
import { getPlanPrice } from '../_utils/computed-price'
import { Badge } from '@/components/ui/badge'
import '../styles/PricingComparisonTable.style.css'

const PricingComparisonHeader = ({
  billingCycle,
}: {
  billingCycle: BillingCycle
}) => (
  <thead>
    <tr>
      <th className="feature-col">Features</th>
      {pricingPlans.map((plan) => (
        <PricingComparisonPlanHeader
          key={plan.id}
          plan={plan}
          billingCycle={billingCycle}
        />
      ))}
    </tr>
  </thead>
)

const PricingComparisonPlanHeader = ({
  plan,
  billingCycle,
}: {
  plan: (typeof pricingPlans)[number]
  billingCycle: BillingCycle
}) => {
  const { amount, discount } = plan.price
  const { finalPrice } = getPlanPrice(amount, discount, billingCycle)
  const isPlanSelectable =
    plan.id !== 3 || (plan.id === 3 && billingCycle !== 'monthly')

  return (
    <th className={cn(plan.isRecommended && 'highlighted')}>
      {plan.isRecommended && (
        <div className="feature-col-badge">Recommended</div>
      )}
      <div
        className={cn(
          'feature-col-plan',
          !isPlanSelectable && 'vertical-center',
        )}
      >
        <div className="price">
          <span>{plan.name}</span>

          {isPlanSelectable ? (
            <>
              <p>
                <span className="currency">{plan.price.currency}</span>
                <span className="amount-price">
                  {formatCurrency(finalPrice, 'decimal')}
                </span>
              </p>
              <span className="period">Billed {billingCycle}</span>
            </>
          ) : (
            <Badge>{plan.info}</Badge>
          )}
        </div>

        {(plan.id !== 3 || (plan.id === 3 && billingCycle !== 'monthly')) && (
          <div>
            <Button
              variant={plan.isRecommended ? 'primary' : 'outlinePrimary'}
              asChild
            >
              <Link href={plan.cta.link}>{plan.cta.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </th>
  )
}

const PricingComparisonBody = () => (
  <tbody>
    {planFeatures.map((feature, index) => {
      const values = pricingPlans.map((plan) => {
        const tier = feature.tiers.find(
          (t) => t.tierId === plan.id,
        ) as PricingValueItem['tiers'][number]

        return tier
          ? tier.label
            ? `${tier.label}${tier.value ? ` - ${formatCurrency(tier.value)}` : ''}`
            : formatCurrency(tier.value)
          : null
      })

      return (
        <tr key={index}>
          <td className="feature-col">{feature.name}</td>
          {pricingPlans.map((plan, idx) => (
            <td
              key={plan.id}
              className={cn(plan.isRecommended && 'highlighted')}
            >
              {!values[idx] ? '—' : values[idx]}
            </td>
          ))}
        </tr>
      )
    })}
  </tbody>
)

const PricingComparisonFooter = ({ totals }: { totals: number[] }) => (
  <tfoot>
    <tr>
      <td className="feature-col total-col">Total</td>
      {totals.map((total, idx) => (
        <td
          key={pricingPlans[idx].id}
          className={cn(pricingPlans[idx].isRecommended && 'highlighted')}
        >
          {total > 0 ? formatCurrency(total) : '—'}
        </td>
      ))}
    </tr>
  </tfoot>
)

export const PricingComparisonTable = ({
  billingCycle,
  totals,
}: {
  billingCycle: BillingCycle
  totals: number[]
}) => (
  <table className="pricing-table">
    <PricingComparisonHeader billingCycle={billingCycle} />
    <PricingComparisonBody />
    <PricingComparisonFooter totals={totals} />
  </table>
)
