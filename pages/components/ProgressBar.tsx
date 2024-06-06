import { ProgressReviewProps } from '@/Types/Props'
import { Cancel, CheckCircle } from '@mui/icons-material'

const ProgressBar = ({
  currentQuestionIndex,
  totalQuestions,
  status,
}: ProgressReviewProps) => {
  const progress = (currentQuestionIndex / totalQuestions) * 100

  return (
    <div className='w-full'>
      <div className='flex justify-between mb-2'>
        {status.map((_, index) => (
          <div key={index} className='w-full px-1'>
            <div
              className={`h-4 rounded ${
                index <= currentQuestionIndex
                  ? 'bg-secondary'
                  : 'bg-gray-200'
              }`}
            >
              <div
                className={`h-4 rounded`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className='flex justify-center mt-2'>
              {status[index] === 'correct' && (
                <CheckCircle color='success' />
              )}
              {status[index] === 'incorrect' && <Cancel color='error' />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
