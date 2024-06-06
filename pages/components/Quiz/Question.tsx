import { QuestionProps } from '@/Types/Props'

const Question = ({
  question,
  options,
  handleAnswerOptionClick,
  answer,
}: QuestionProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-xl mb-4'>{question}</div>
      <div className='flex flex-wrap justify-center flex-col w-full'>
        {options?.map(option => (
          <button
            className='bg-primary text-white p-2 m-2 rounded'
            onClick={() => handleAnswerOptionClick(option === answer)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
