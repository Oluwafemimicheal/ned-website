import { Button } from '@/components/ui/button'
import { GiDogHouse } from "react-icons/gi";
import { IoMdMail, IoIosSend } from "react-icons/io";
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-10 bg-amber-50 flex justify-center'>
      <div className='w-full  flex flex-col lg:grid lg:grid-cols-5 lg:gap-2 gap-20 lg:h-80 h-auto'>

        {/* left content */}
        <div className='w-full col-span-1 flex flex-col justify-between gap-5'>
          <div>
            <div className='flex items-center mb-2'>
              <GiDogHouse size={40} />
              <h1 className='text-4xl font-bold'>NED</h1>
            </div>
            <p className='font-semibold text-[22px] leading-6'>Building Your Dreams In Real Estate.</p>
          </div>

          <div>
            <h1 className='font-semibold text-[23px] mb-2'>Subscribe to our news</h1>
            <p className='text-sm'>Stay informed and never miss a beat;
              <br /> subscribe to our exclusive news update!
            </p>
            <form className='my-5'>
              <input type="text" placeholder='Enter your email' className='pb-1 border-b-2 border-gray-300 placeholder:text-sm w-full outline-none' />
            </form>
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* center content */}
        <div className='col-span-3 justify-items-center'>
          <div className='footer-links flex flex-wrap lg:flex-wrap items-start lg:gap-20 gap-10'>
            <ul>
              <h1 className='mb-4 font-semibold text-md'>Quick Navigation</h1>
              <div className='flex flex-col gap-2 text-gray-500'>
                <li>Home</li>
                <li>Our Properties</li>
                <li>Our Advantages</li>
                <li>Our Team</li>
                <li>Career</li>
                <li>Mission and Value</li>
              </div>
            </ul>
            <ul>
              <h1 className='mb-4 font-semibold text-md'>Properties</h1>
              <div className='flex flex-col gap-2 text-gray-500'>
                <li>Apartment for Sale</li>
                <li>Villa for Sale</li>
                <li>Townhouses for Sale</li>
                <li>New Developments</li>
                <li>Luxury Properties</li>
                <li>Sea View Properties</li>
              </div>
            </ul>
            <ul>
              <h1 className='mb-4 font-semibold text-md'>Resources</h1>
              <div className='flex flex-col gap-2 text-gray-500'>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Buying Guides</li>
                <li>Selling Guides</li>
                <li>Area Guides</li>
                <li>Real Estate News</li>
              </div>
            </ul>
          </div>
        </div>

        {/* right content */}
        <div className='col-span-1 sm:w-full'>
          <div className='flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl'>We are here to change <br />your future.</h1>
            <div className='flex items-center gap-5'>
              <Button size="sm">Contact Us</Button>
              <IoMdMail size={25} />
              <IoIosSend size={25} />
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.588469639722!2d3.4038743736492916!3d6.4468495240521015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b245700d5fb%3A0xd816cd2a37d92671!2s27%20Macarthy%20Street%2C%20Lagos%20Island%2C%20Lagos%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1770452879198!5m2!1sen!2sng"
                className="w-full h-full border-0"
                loading="lazy">

              </iframe>
              <p className='text-sm font-semibold mt-2'>27 McCarthy Street,<br /> Onikan, Obalende, Lagos Nigeria.</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
