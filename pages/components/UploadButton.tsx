import { UploadButtonProps } from '@/Types/Props'
import React, { ChangeEvent, FC, useState } from 'react'

const UploadButton: FC<UploadButtonProps> = ({ setPic }) => {
  const [fileName, setFileName] = useState('')

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPic(file)
    }
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className='flex items-center w-3/4 flex-col gap-3'>
      <label
        htmlFor='file-input'
        className='flex text-center rounded-md w-full cursor-pointer items-center justify-center py-3 uppercase tracking-widest font-semibold shadow-md bg-slate-100 text-primary'
      >
        Escolha foto de perfil
      </label>
      <input
        id='file-input'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleFileChange}
      />
      {fileName ? (
        <span className='ml-2 text-sm text-center text-gray-500 overflow-hidden'>
          Selecionado: {fileName}
        </span>
      ) : null}
    </div>
  )
}

export default UploadButton
