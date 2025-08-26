import pricingPlans from '@/constants/pricing-plans'
import { PricingCard } from './PricingCard'

export const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  )
}
