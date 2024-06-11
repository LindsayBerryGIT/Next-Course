import React,{ReactNode} from 'react'

interface Props{
    children: ReactNode;
}

const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside  className='bg-warning'>
        Admin Sidebar
        </aside>
    </div>
  )
}

export default AdminLayout