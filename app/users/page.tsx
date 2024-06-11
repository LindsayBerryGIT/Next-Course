import { table } from 'console';
import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props{
    searchParams:{sortOrder:string}
}


const UsersPage = async({searchParams:{sortOrder}}:Props) => {
  return (
    <div>
        <Link href="/users/new" className='btn btn-ghost'>New User</Link>
        <h1>
            Users
        </h1>
        <Suspense fallback = {<div className='justify-center flex w-full'><div className="h-10 loading loading-infinity loading-lg"></div></div>}>
        <UserTable sortOrder={sortOrder}/>
        </Suspense>
        
    </div>
  )
}

export const revalidate = 0;
export default UsersPage
