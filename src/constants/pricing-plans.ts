import planFeatures from './plan-features'

const pricingPlans = [
  {
    id: 1,
    name: 'Launch & Organize',
    description: 'Perfect for individuals and small teams getting started',
    price: {
      currency: '$',
      amount: 24,
      discount: 0.27,
    },
    valueStack: planFeatures,
    totalValue: 1200,
    cta: { label: 'Get started', link: '/checkout' },
    guarantee: '30-day money-back guarantee',
  },
  {
    id: 2,
    name: 'Pro-Growth Manager',
    description: 'Ideal for growing businesses and professional teams',
    isRecommended: true,
    price: {
      currency: '$',
      amount: 38,
      discount: 0.23,
    },
    valueStack: planFeatures,
    totalValue: 2200,
    cta: { label: 'Get started', link: '/checkout' },
    guarantee: '30-day money-back guarantee',
  },
  {
    id: 3,
    name: 'Elite Expansion',
    description: 'For large organizations',
    price: {
      currency: '$',
      amount: 40,
      discount: null,
    },
    valueStack: planFeatures,
    totalValue: 3500,
    cta: { label: 'Contact sales', link: '/checkout' },
    guarantee: '30-day money-back guarantee',
  },
]

export default pricingPlans
