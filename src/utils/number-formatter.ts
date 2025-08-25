type FormatStyle = 'currency' | 'decimal' | 'unit'

export function formatCurrency(
  price: number,
  formatStyle: FormatStyle = 'currency',
  currency: string = 'usd',
): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: formatStyle,
    currency: currency.toUpperCase(),
  }).format(price)
}

export const shortenNumber = (num: number): string => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B'
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K'
  return num.toString()
}
