'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type BillingCycle = 'monthly' | 'yearly'

interface PricingContextProps {
  billing: BillingCycle
  setBilling: (cycle: BillingCycle) => void
}

const PricingContext = createContext<PricingContextProps | undefined>(undefined)

export const PricingProvider = ({ children }: { children: ReactNode }) => {
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  return (
    <PricingContext.Provider value={{ billing, setBilling }}>
      {children}
    </PricingContext.Provider>
  )
}

export const usePricing = () => {
  const context = useContext(PricingContext)
  if (!context)
    throw new Error('usePricing must be used within PricingProvider')
  return context
}
