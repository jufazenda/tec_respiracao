import React, { useState } from 'react'
import Button from './components/Button'
import Field from './components/Field'
import KeyIcon from '@mui/icons-material/Key'
import Link from 'next/link'
import {
  PersonAddAltOutlined
} from '@mui/icons-material'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <main className='bg-white h-screen flex flex-col justify-center items-center w-full gap-14'>
      <h1 className='text-primary text-3xl font-semibold'>Entrar</h1>
      <div className='flex w-full justify-center flex-col gap-5 items-center'>
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
      </div>
      <Button name='Entrar' func='xx' />

      <div className='text-primary text-sm tracking-wider font-semibold flex gap-3 items-center uppercase'>
        <KeyIcon />
        <Link href='/changePassword'>Esqueceu a senha?</Link>
      </div>
      <div className='text-primary text-sm tracking-wider font-semibold flex gap-3 items-center uppercase'>
        <PersonAddAltOutlined />
        <Link href='/cadastro'>Inscreva-se</Link>
      </div>
    </main>
  )
}

export default Login
