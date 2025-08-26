'use client'

import { useLayoutEffect, useState } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const queries: Record<Breakpoint, string> = {
  xs: '(min-width: 320px)',
  sm: '(min-width: 540px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
}

export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const query = queries[breakpoint]
  const getMatch = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false

  const [matches, setMatches] = useState(getMatch)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    const handler = () => setMatches(media.matches)

    handler() // sync once
    media.addEventListener('change', handler)

    return () => media.removeEventListener('change', handler)
  }, [query])

  return matches
}
