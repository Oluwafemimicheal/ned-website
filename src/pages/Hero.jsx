import HeroSlide from '@/components/ui/hero/HeroSlide'
import React from 'react'
import badge from "../assets/Background_Imgs/badge.png"

const Hero = () => {
  return (
    <div className='h-screen bg-gray-400 relative overflow-hidden'>
      <HeroSlide/>
      <div className='w-max h-max absolute top-20 right-5 lg:right-14 z-30'>
        <img src={badge} alt="Loading" className='w-20 md:w-25 lg:w-40'/>
      </div>
    </div>
  )
}

export default Hero
