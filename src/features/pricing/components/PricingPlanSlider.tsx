'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import pricingPlans from '@/constants/pricing-plans'
import { PricingPlan } from '@/features/pricing/types/Pricing.types'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { PricingCard } from './PricingCard'
import { PricingFeatures } from './PricingFeatures'
import '../styles/PricingPlanSlider.style.css'

export const PricingPlanSlider = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: false,
  })
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>(
    Array.from({ length: pricingPlans.length }, (_, i) => i),
  )

  const emblaApis = [emblaApi1, emblaApi2].filter(
    Boolean,
  ) as EmblaCarouselType[]

  useEffect(() => {
    if (!emblaApis.length) return

    setScrollSnaps(emblaApis[0].scrollSnapList())

    const offHandlers: (() => void)[] = []

    emblaApis.forEach((api) => {
      const handler = () => {
        const idx = api.selectedScrollSnap()
        setSelectedIndex(idx)

        emblaApis.forEach((other) => {
          if (other === api) return
          if (other.selectedScrollSnap() !== idx) {
            other.scrollTo(idx)
          }
        })
      }

      api.on('select', handler)
      offHandlers.push(() => api.off('select', handler))
    })

    setSelectedIndex(emblaApis[0].selectedScrollSnap())

    return () => offHandlers.forEach((off) => off())
  }, [emblaApi1, emblaApi2])

  const scrollToIndex = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= scrollSnaps.length) return
      emblaApi1?.scrollTo(idx)
      emblaApi2?.scrollTo(idx)
    },
    [emblaApi1, emblaApi2, scrollSnaps.length],
  )

  const scrollPrev = useCallback(() => {
    if (selectedIndex > 0) {
      scrollToIndex(selectedIndex - 1)
    }
  }, [selectedIndex, scrollToIndex])

  const scrollNext = useCallback(() => {
    if (selectedIndex < scrollSnaps.length - 1) {
      scrollToIndex(selectedIndex + 1)
    }
  }, [selectedIndex, scrollSnaps.length, scrollToIndex])

  return (
    <div className="plan-slider">
      <div className="plan-slider-viewport" ref={emblaRef1}>
        <div className="plan-slider-container">
          {pricingPlans.map((plan: PricingPlan, idx: number) => (
            <div className="plan-slider-slide" key={idx}>
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      <div className="plan-slider-controls-container">
        <div className="plan-slider-controls">
          <button
            type="button"
            className="plan-slider-prev"
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
            aria-label="Previous"
          >
            <HiArrowLongLeft />
          </button>

          <div
            className="plan-slider-dots"
            role="tablist"
            aria-label="Carousel pagination"
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`plan-slider-dot ${idx === selectedIndex ? 'is-selected' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === selectedIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="plan-slider-next"
            onClick={scrollNext}
            disabled={selectedIndex === scrollSnaps.length - 1}
            aria-label="Next"
          >
            <HiArrowLongRight />
          </button>
        </div>
      </div>

      <div className="plan-slider-viewport" ref={emblaRef2}>
        <div className="plan-slider-container">
          {pricingPlans.map((plan: PricingPlan, idx: number) => (
            <div className="plan-slider-slide" key={idx}>
              <div className="card pricing-features">
                <div className="pricing-features-header">{plan.name}</div>
                <PricingFeatures plan={plan} isCustomizable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
