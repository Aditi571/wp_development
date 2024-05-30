import React from 'react'

export const Sender = ({message}) => {
  return (
    <div className='flex justify-end'>
        <h1 className='bg-blue-400 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg'>{message}</h1>
    </div>
  )
}
