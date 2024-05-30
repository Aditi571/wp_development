import React from 'react'

export const Receiver = ({message}) => {
  return (
    <div className='flex'>
        <h1 className=' rounded-lg bg-slate-300 pt-2 pb-2 pl-5 pr-5'>{message}</h1>
    </div>
  )
}
