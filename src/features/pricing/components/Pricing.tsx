'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { PricingProvider } from '@/context/PricingContext'
import { MdElectricBolt } from 'react-icons/md'
import { SiOpenlayers } from 'react-icons/si'
import pricingPlans from '@/constants/pricing-plans'
import { PricingPlan } from '@/features/pricing/types/Pricing.types'
import { PricingCard } from './PricingCard'
import { PricingSwitcher } from './PricingSwitcher'
import { PricingComparison } from './PricingComparison'
import { PricingComparisonMobile } from './PricingComparisonMobile'
import '../styles/Pricing.style.css'

export const Pricing = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: false })

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

        {/* Mobile carousel */}
        <div className="section-content">
          <PricingSwitcher />
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {pricingPlans.map((plan: PricingPlan, idx: number) => (
                  <div className="embla__slide" key={idx}>
                    <PricingCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>
          </div>
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
          <PricingComparison />
          <PricingComparisonMobile />
        </div>
      </div>
    </PricingProvider>
  )
}
