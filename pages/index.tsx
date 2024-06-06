import Quiz from './components/Quiz'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center flex-1 px-12 text-center'>
        <h1 className='text-3xl m-10 font-bold text-primary_darker'>
          Quiz Técnicas Manuais
        </h1>

        <Quiz />
      </main>
    </div>
  )
}
