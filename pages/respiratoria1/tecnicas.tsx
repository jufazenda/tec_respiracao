import React from 'react'
import Back from '../components/Back'

const Tecnicas = () => {
  return (
    <main className='flex mt-16 justify-center flex-col bg-secondary h-screen gap-5 '>
          <Back pageName='Doenças Respiratórias' />
          {/* {conteudoDoencas.map((conteudo, index) => (
            <>
              <Conteudos titulo={conteudo.titulo} key={index} />
            </>
          ))} */}
    </main>
  )
}

export default Tecnicas