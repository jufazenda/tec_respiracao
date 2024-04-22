import React, { useState } from 'react'
import Button from './components/Button'
import Field from './components/Field'
import KeyIcon from '@mui/icons-material/Key'
import Link from 'next/link'
import { PersonAddAltOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { getUsers } from './api/supabaseFunctions'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const users = await getUsers()

      const user = users?.find(
        user => user.email === email && user.password === password
      )

      if (user) {
        router.push('/home')
      } else {
        alert(
          'Credenciais inválidas. Por favor, verifique seu email e senha.'
        )
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message)
    }
  }

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
      <Button name='Entrar' onClick={handleLogin} />

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
