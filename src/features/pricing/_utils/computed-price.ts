import { BillingCycle } from "@/context/PricingContext"

export function getPlanPrice(amount: number, discount: number | null, billingCycle: BillingCycle) {
  const baseMonthly = amount
  const baseYearly = amount * 12
  const basePrice = billingCycle === "monthly" ? baseMonthly : baseYearly
  const hasDiscount = !!discount
  const strikePrice = hasDiscount ? basePrice : null
  const finalPrice = hasDiscount ? basePrice * (1 - discount!) : basePrice
  const discountLabel = hasDiscount ? `${discount! * 100}% OFF` : null

  return { strikePrice, finalPrice, discountLabel }
}
