import React, { useState } from 'react'
import Button from './components/Button'
import Image from 'next/image'
import Footer from './components/Footer'

const Home = () => {
  const [name, setName] = useState<string>('')

  return (
    <main className='bg-primary h-screen flex flex-col justify-center items-center w-full gap-10 pb-16'>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/logoPNG.png' alt='Logo' width={200} height={200} />
        <h1 className='text-white text-3xl font-semibold'>Olá, {name}</h1>
        <span className='text-white text-lg font-semibold'>
          O que você quer estudar hoje?
        </span>
      </div>

      <div className='flex flex-col w-full justify-center items-center gap-5'>
        <Button name='Respiratória I' func='' type='primary' />
        <Button name='Respiratória II' func='' type='primary' />
        <Button name='Terapia Intensiva' func='' type='primary' />
      </div>
      <Footer />
    </main>
  )
}

export default Home
