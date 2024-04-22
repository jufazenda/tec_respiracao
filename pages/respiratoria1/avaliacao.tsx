import React from 'react'
import Conteudos from '../components/Conteudos'
import Back from '../components/Back'

const conteudosAvaliacao = [
  { titulo: 'Semiologia do Sistema Respiratório' },
  { titulo: 'Gasometria Arterial' },
  { titulo: 'Espirometria' },
  { titulo: 'Exames de Imagem' },
]

const Avaliacao = () => {
  return (
    <main className='flex mt-16 justify-center flex-col bg-secondary h-screen gap-5 '>
      <Back pageName='Avaliação' />
      {conteudosAvaliacao.map((conteudo, index) => (
        <>
          <Conteudos titulo={conteudo.titulo} key={index} />
        </>
      ))}
    </main>
  )
}

export default Avaliacao
