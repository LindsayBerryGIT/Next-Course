
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/Quarterturn_Icon_white.png'
import NavBarUserElement from './components/NavBarUserElement'
import Image from 'next/image'

const NavBar = () => {


  return (
    <div className='flex bg-base-200'>
      <Link href='/' className="flex p-5">
      <Image src={logo}  alt="Logo" priority height={40} quality={100} className='mx-5' />
      </Link>
      <div className="flex space-x-3 items-center w-full justify-end pr-10">
        <Link href="/" className=''>NextJs</Link>
        <Link href="/users">Users</Link>
        <NavBarUserElement/>
      </div>
        
    </div>
  )
}

export default NavBar