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

export interface ProgressReviewProps {
  currentQuestionIndex: number
  totalQuestions: number
  status: ('correct' | 'incorrect' | 'pending')[]
}

export interface UploadButtonProps {
  setPic: React.Dispatch<React.SetStateAction<File | null>>
}

export interface PropsBack {
  pageName: string
}

export interface PropsConteudos {
  titulo: string
  conteudo?: string
}

export interface QuestionProps {
  question: string
  options: string[]
  handleAnswerOptionClick: (isCorrect: boolean) => void
  answer: string
}

export interface ReviewProps {
  questions: QuestionType[]
  userAnswers: string[]
  status: ('correct' | 'incorrect' | 'pending')[]
}

export interface QuestionType {
  question: string
  options: string[]
  answer: string
  explanation: string
}
