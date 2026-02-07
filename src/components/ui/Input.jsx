import React from 'react'

export const Input = ({placeholder, name, type="text"}) => {
  return (
    <input className='p-3 bg-gray-100 w-full rounded-sm' type={type} placeholder={placeholder} name={name} autoComplete='off' required />
  )
}
export const TextArea = ({placeholder, name, type="text"}) => {
  return (
    <textarea className='p-3 bg-gray-100 w-full rounded-sm resize-none' rows={8} type={type} placeholder={placeholder} name={name} autoComplete='off' required></textarea>
  )
}


