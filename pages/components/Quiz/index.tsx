import { useState } from 'react'
import Question from './Question'
import ProgressBar from '../ProgressBar'
import Review from '../Review'
import { QuestionType } from '@/Types/Props'

const questions: QuestionType[] = [
  {
    question: 'Qual é a principal função do sistema respiratório?',
    options: ['Digestão', 'Circulação', 'Respiração', 'Excreção'],
    answer: 'Respiração',
    explanation:
      'A principal função do sistema respiratório é a respiração, fornecendo oxigênio ao corpo e removendo dióxido de carbono.',
  },
  {
    question: 'Onde ocorre a troca gasosa nos pulmões?',
    options: ['Bronquíolos', 'Traqueia', 'Alvéolos', 'Diafragma'],
    answer: 'Alvéolos',
    explanation:
      'A troca gasosa ocorre nos alvéolos, que são pequenas sacolas de ar nos pulmões onde o oxigênio é trocado pelo dióxido de carbono no sangue.',
  },
  {
    question: 'Onde ocorre a troca gasosa nos pulmões?',
    options: ['Bronquíolos', 'Traqueia', 'Alvéolos', 'Diafragma'],
    answer: 'Alvéolos',
    explanation:
      'A troca gasosa ocorre nos alvéolos, que são pequenas sacolas de ar nos pulmões onde o oxigênio é trocado pelo dióxido de carbono no sangue.',
  },
  {
    question: 'Onde ocorre a troca gasosa nos pulmões?',
    options: ['Bronquíolos', 'Traqueia', 'Alvéolos', 'Diafragma'],
    answer: 'Alvéolos',
    explanation:
      'A troca gasosa ocorre nos alvéolos, que são pequenas sacolas de ar nos pulmões onde o oxigênio é trocado pelo dióxido de carbono no sangue.',
  },
  {
    question: 'Onde ocorre a troca gasosa nos pulmões?',
    options: ['Bronquíolos', 'Traqueia', 'Alvéolos', 'Diafragma'],
    answer: 'Alvéolos',
    explanation:
      'A troca gasosa ocorre nos alvéolos, que são pequenas sacolas de ar nos pulmões onde o oxigênio é trocado pelo dióxido de carbono no sangue.',
  },
  // Adicione mais perguntas conforme necessário
]

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [status, setStatus] = useState<
    ('correct' | 'incorrect' | 'pending')[]
  >(new Array(questions.length).fill('pending'))

  const [userAnswers, setUserAnswers] = useState<string[]>(
    new Array(questions.length).fill('')
  )

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    const newStatus = [...status]
    const newUserAnswers = [...userAnswers]

    newStatus[currentQuestionIndex] = isCorrect ? 'correct' : 'incorrect'
    newUserAnswers[currentQuestionIndex] =
      questions[currentQuestionIndex].options.find(
        option => option === questions[currentQuestionIndex].answer
      ) || ''

    setStatus(newStatus)
    setUserAnswers(newUserAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestionIndex + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      {showScore ? (
        <>
          <div className='text-2xl'>
            Você acertou {score} de {questions.length} questões.
          </div>
          <Review
            questions={questions}
            userAnswers={userAnswers}
            status={status}
          />
        </>
      ) : (
        <>
          <div className='w-full'>
            <span className='text-xl font-bold text-primary_darker'>
              Questão {currentQuestionIndex + 1} de {questions.length}
            </span>
            <hr className='w-full my-4 border-t-2 border-gray-300' />
          </div>
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleAnswerOptionClick={handleAnswerOptionClick}
            answer={questions[currentQuestionIndex].answer}
          />
          <ProgressBar
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            status={status}
          />
        </>
      )}
    </div>
  )
}

export default Quiz
