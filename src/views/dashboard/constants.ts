import type { SalesTypes } from './types'

export const options: { value: SalesTypes; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'coating', label: 'Coating' },
  { value: 'nonCoating', label: 'Non Coating' },
]
