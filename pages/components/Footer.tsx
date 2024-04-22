import { Home, Person } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex bg-white w-full justify-between px-20 h-16 fixed bottom-0'>
      <Link href={'/home'} className='flex'>
        <div className='flex flex-col cursor-pointer justify-center items-center text-primary'>
          <Home />
          Menu
        </div>
      </Link>
      <Link href={'/perfil'} className='flex'>
        <div className='flex flex-col cursor-pointer justify-center items-center text-primary'>
          <Person />
          Perfil
        </div>
      </Link>
    </footer>
  )
}

export default Footer
