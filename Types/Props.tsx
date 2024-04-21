export interface PropsButton {
  name: string
  func: string
  type?: string
  icon?: string
}

export interface PropsField {
  value: string
  setValue: (value: string) => void
  label: string
  type: string
}
