import { Source_Sans_3 } from 'next/font/google'
import Image from 'next/image'
import Button from './components/Button'

const font = Source_Sans_3({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-primary h-screen flex flex-col justify-center items-center w-full'>
      <Image src='/logo.jpg' alt='Logo' width={600} height={600} />

      <div className='flex w-full justify-center flex-col gap-5 items-center'>
        <Button name='Entrar' type='primary' func='/login' />
        <Button name='Inscreva-se' type='secondary' func='/cadastro' />
      </div>
    </main>
  )
}
