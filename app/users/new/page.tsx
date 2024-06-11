'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
        <h1>NewUserPage</h1>
        <button className='btn  btn-primary' onClick={() => router.push('/users')}>Create Account</button>
    </div>
  )
}

export default NewUserPage