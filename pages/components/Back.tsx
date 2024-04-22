import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { PropsBack } from '@/Types/Props'
import { useRouter } from 'next/router'

const Back = ({ pageName }: PropsBack) => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <header className='flex bg-primary shadow-md justify-between w-full px-5 items-center h-16 fixed top-0 text-white'>
      <button onClick={goBack} className='flex w-20 items-center'>
        <ArrowBackIcon />
      </button>

      <h1 className='text-xl font-bold'>{pageName}</h1>
    </header>
  )
}

export default Back
