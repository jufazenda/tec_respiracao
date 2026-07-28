export type Factor = {
  label: React.ReactNode
  side: 'right' | 'left'
  title: string
  body: string
  examples?: string[]
}

export type FactorPopup = Factor | null
