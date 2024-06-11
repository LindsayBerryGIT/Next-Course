'use client'
import React from 'react'

interface  Props{
    error:Error
    reset: () => void;
}

const ErrorPage = ({error,reset}:Props) => {
  return (
    <div className='p-10 justify-center flex w-full'>
        <div className="font-bold text-4xl">An error occured</div>
        <button className='btn btn-primary ml-10' onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default ErrorPage