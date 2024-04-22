export interface PropsButton {
  name: string
  func?: string
  onClick?: () => void
  type?: string
  icon?: string
}

export interface PropsField {
  value: string
  setValue: (value: string) => void
  label: string
  type: string
}

export interface Users {
  name: string
  email: string
  password: string
  pic?: File | undefined
}

export interface UploadButtonProps {
  setPic: React.Dispatch<React.SetStateAction<File | null>>
}
