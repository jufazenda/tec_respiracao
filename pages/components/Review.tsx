import { ReviewProps } from '@/Types/Props'
import { Cancel, CheckCircle } from '@mui/icons-material'

const Review = ({ questions, userAnswers, status }: ReviewProps) => {
  return (
    <div className='w-full'>
      {questions.map((question, index) => (
        <div
          key={index}
          className={` flex justify-start mb-4 rounded-md p-6 ${
            status[index] === 'correct'
              ? 'bg-green-200 border-l-8 border-green-500'
              : 'bg-red-200 border-l-8 border-red-500'
          }`}
        >
          <div>
            <div className='font-bold flex gap-3 items-center mb-3'>
              {status[index] === 'incorrect' && (
                <div className='text-red-500'>
                  <Cancel />
                </div>
              )}
              {status[index] === 'correct' && (
                <div className='text-green-500'>
                  <CheckCircle />
                </div>
              )}
              Questão {index + 1}
            </div>

            <div className='flex flex-col gap-3 items-start text-md'>
              <span>
                <b>Resposta correta:</b> {userAnswers[index]}
              </span>
              <span className='text-justify'>{question.explanation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Review
