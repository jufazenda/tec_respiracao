import { Person } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'
import Field from './components/Field'
import Button from './components/Button'
import { saveUser } from './api/supabaseFunctions'
import UploadButton from './components/UploadButton'
import { useRouter } from 'next/router'

const Cadastro = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [pic, setPic] = useState<File | null>(null)

  const handleSaveUser = async () => {
    if (!name || !email || !password) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    try {
      await saveUser({ name, email, password, pic: pic || undefined })
      alert(
        "Usuário salvo com sucesso! Clique em 'Já possui uma conta?' para fazer login."
      )

      setEmail('')
      setPassword('')
      setName('')
      setPic(null)
    } catch (error: any) {
      console.error('Erro ao salvar usuário:', error.message)
    }
  }

  return (
    <main className='bg-secondary h-screen flex flex-col justify-center items-center w-full gap-14 overflow-y-auto'>
      <h1 className='text-white text-3xl font-semibold'>Inscreva-se</h1>
      <div className='flex w-full justify-center flex-col gap-5 items-center'>
        <Field
          value={name}
          setValue={setName}
          label='Nome Completo'
          type='String'
        />
        <Field
          value={email}
          setValue={setEmail}
          label='E-mail'
          type='email'
        />
        <Field
          value={password}
          setValue={setPassword}
          label='Senha'
          type='password'
        />
        <UploadButton setPic={setPic} />
      </div>

      <Button name='Inscreva-me' onClick={handleSaveUser} />

      <div className='text-white text-sm tracking-wider font-semibold flex gap-3 items-center uppercase'>
        <Person />
        <Link href='/login'>Já possui uma conta?</Link>
      </div>
    </main>
  )
}

export default Cadastro
