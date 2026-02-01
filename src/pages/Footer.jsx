import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
  return (
   <footer className='p-10 bg-amber-50 flex justify-center'>
    <div className='w-full lg:w-7xl mx-auto grid lg:grid-cols-5 gap-5 h-100'>
      <div className='col-span-1 flex flex-col justify-between gap-5'>
        <div>
          <h1>Logo</h1>
          <p>Description about us and what we do.</p>
        </div>
        <div>
          <h1>Get in touch with us</h1>
          <p>What we offer and type of product we work on.</p>
            <Button variant="">Get in touch</Button>
        </div>
          <div>
            <h1>Get in touch with us</h1>
            <p>What we offer and type of product we work on.</p>
            <Button>Get in touch</Button>
          </div>
      </div>
      <div className='col-span-3'>center</div>
      <div className='col-span-1'>Right</div>
    </div>
   </footer>
  )
}

export default Footer
