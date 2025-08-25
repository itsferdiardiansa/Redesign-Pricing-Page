import pricingPlans from '@/constants/pricing-plans'

export type PricingValueItem = {
  name: string
  tiers: {
    tierId: number
    value: number
    label?: string
  }[]
}

export type FilteredValueStack = {
  id: string | number
  name: string
  value: string | number
  label?: string
}

export type PricingPlan = (typeof pricingPlans)[number]
