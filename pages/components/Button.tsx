import { PropsButton } from '@/Types/Props'
import Link from 'next/link'
import React from 'react'

const Button = ({ name, func, type, icon, onClick }: PropsButton) => {
  return (
    <>
      {func ? (
        <Link href={func} className='w-full flex justify-center'>
          <button
            onClick={onClick}
            className={`flex rounded-md w-3/4 cursor-pointer items-center justify-center py-3 uppercase tracking-widest font-semibold shadow-md ${
              type === 'primary'
                ? 'bg-white text-primary'
                : type === 'secondary'
                ? 'bg-secondary text-white'
                : 'bg-primary text-white'
            }`}
          >
            {name}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex rounded-md w-3/4 cursor-pointer items-center justify-center py-3 uppercase tracking-widest font-semibold shadow-md ${
            type === 'primary'
              ? 'bg-white text-primary'
              : type === 'secondary'
              ? 'bg-secondary text-white'
              : 'bg-primary text-white'
          }`}
        >
          {name}
        </button>
      )}
    </>
  )
}

export default Button
