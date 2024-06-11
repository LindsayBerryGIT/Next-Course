'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBarUserElement = () => {
    const {status, data:session} = useSession();

  return (
    <div>
        {status==="unauthenticated"  && <Link href="/api/auth/signin">Sign in</Link>}
        {status==="authenticated"  && 
        <div>
          {session.user!.email}
          <Link href='/api/auth/signout' className='m-3'>Sign Out</Link>
        </div>}
    </div>
  )
}

export default NavBarUserElement