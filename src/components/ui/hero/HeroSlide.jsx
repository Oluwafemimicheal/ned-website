import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import HeroCard from './HeroCard';
import bg1 from "../../../assets/Background_Imgs/bg7.jpg"
import bg2 from "../../../assets/Background_Imgs/bg3.jpg"
import bg3 from "../../../assets/Background_Imgs/bg2.jpg"

function HeroSlide() {
  return (
    <div className='hero'>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true
        }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroCard bg={bg1} heading='Expert Valuation Services' text='We deliver credible and accurate value opinions for a wide range of assets such as land and buildings, plant and machineries, chattels and other intangible assets'/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard bg={bg2} heading='Brokerage and Consultancy' text='We offer professional consultancy services for a wide range of real estate transactonary needs ranging from tenancies, leases, sales and purchases. Our appraisal consultancy approach provides a unique advantage for real estate stakeholders on such transactions as joint ventures (JV), forward sales (off-plan) as well as project feasibility and viability'/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard bg={bg3} heading='Project Monitoring and Evaluation' text="Our core services coextends the delivery of small, medium and large scale real estate projects through proper supervision, budgetting, timely delivery, milestone evaluations, comparative cost advantages and funding arrangements. Our goal is to optimize our client's investment portfolio" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlide;
