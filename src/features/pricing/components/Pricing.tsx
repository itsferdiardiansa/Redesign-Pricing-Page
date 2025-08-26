'use client'

import { PricingProvider } from '@/context/PricingContext'
import { MdElectricBolt } from 'react-icons/md'
import { SiOpenlayers } from 'react-icons/si'
import { PricingSwitcher } from './PricingSwitcher'
import { PricingComparison } from './PricingComparison'
import { PricingComparisonMobile } from './PricingComparisonMobile'
import { PricingPlanSlider } from './PricingPlanSlider'
import { PricingPlans } from './PricingPlans'
import { useBreakpoint } from '@/hooks/useBreakpoints'
import '../styles/Pricing.style.css'

export const Pricing = () => {
  const isLgUp = useBreakpoint('lg')

  return (
    <PricingProvider>
      <div className="section">
        <div className="section-header">
          <div className="section-badge">
            <SiOpenlayers className="icon" />
            <span>Pricing</span>
          </div>
          <h2 className="section-title">
            Choose the plans that fits your finances
          </h2>
        </div>

        <div className="section-content">
          <PricingSwitcher />

          {isLgUp ? <PricingPlans /> : <PricingPlanSlider />}
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-badge">
            <MdElectricBolt className="icon" />
            <span>Comparison</span>
          </div>
          <h2 className="section-title">
            Explore the best plan for your business
          </h2>
        </div>

        <div className="section-content">
          {isLgUp ? <PricingComparison /> : <PricingComparisonMobile />}
        </div>
      </div>
    </PricingProvider>
  )
}
