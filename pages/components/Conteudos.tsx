import { PropsConteudos } from '@/Types/Props'
import { ArrowDropDown } from '@mui/icons-material'
import React, { useState } from 'react'

const Conteudos = ({ titulo, conteudo }: PropsConteudos) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div
        className={`flex text-md bg-white font-semibold uppercase h-20 items-center justify-between px-5 mx-5 ${
          open ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={() => setOpen(!open)}
      >
        <span>{titulo}</span>        
        <span>
          <ArrowDropDown />
        </span>
      </div>
      <div
        className={
          ` bg-white_shadow h-fit items-center justify-between p-5 mx-5 rounded-b-md ${open ? 'flex' : 'hidden'}`
        }
      >
        {conteudo || 'Conteúdo Indisponível'}
      </div>
    </div>
  )
}

export default Conteudos
