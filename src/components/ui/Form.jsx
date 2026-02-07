import React from 'react'
import { Input, TextArea } from './Input'
import { Button } from './button'


const Form = () => {
  return (
    <form className='flex flex-col gap-5 rounded-2xl'>
      <div className='flex justify-between gap-5'>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>
      <div>
        <Input type='email' placeholder={"Email Address"}/>
      </div>
      <div>
        <Input type='text' placeholder={"Location"}/>
      </div>
      <div>
        <TextArea/>
      </div>
      <Button size="lg">Submit</Button>

    </form>
  )
}

export default Form
