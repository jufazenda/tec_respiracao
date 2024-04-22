import React from 'react'
import Back from './components/Back'
import Button from './components/Button'

const Respiratoria1 = () => {
  return (
    <div className='mt-16'>
      <Back pageName='Fisioterapia Respiratória I' />
      <div className='flex gap-5 justify-center items-center flex-col h-padraoScreen'>
        <Button name='Avaliação do Paciente' func='respiratoria1/avaliacao'/>
        <Button name='Doenças Respiratórias' func='respiratoria1/doencas' />
        <Button name='Técnicas Manuais' func='respiratoria1/tecnicas' />
        <Button name='Equipamentos' />
      </div>
    </div>
  )
}

export default Respiratoria1
