import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropertyDetailCard from './PropertyDetailCard'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import { Pagination, Navigation } from 'swiper/modules';


const PropertyDetails = ({ show, showAction }) => {
   
  return (
    <>
      {
        show && <div className='fixed h-screen top-0 w-full bg-black/80 z-99'>
            <button onClick={()=> showAction(false) } className='absolute right-5 top-5 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer z-40'>
              <FaTimes size={25} color='black'/>
            </button>
          <div className='property relative h-full flex justify-center items-center gap-10'>
            <Swiper
              pagination={{
                type: 'progressbar',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide>
                <PropertyDetailCard/>
              </SwiperSlide>
              <SwiperSlide>
                <PropertyDetailCard />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyDetailCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      }

    </>

  )
}

export default PropertyDetails
