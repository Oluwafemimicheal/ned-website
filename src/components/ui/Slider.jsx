// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className='lg:w-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quidem veniam quaerat! Fuga sint culpa sed facere atque. Commodi nesciunt ratione in laboriosam a tempora beatae autem nihil magnam consequuntur?</p>

          <div className='w-full flex justify-between items-center absolute bottom-0'>
            <div>
              <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white shadow'><FaArrowRight /></div>
            </div>

            <div className='flex gap-10'>
              <div className='w-10 h-10 flex justify-center items-center rounded-full bg-white shadow'><FaArrowLeft /></div>
              <div className='w-10 h-10 flex justify-center items-center rounded-full bg-white shadow'><FaArrowRight /></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

      </Swiper>
    </>
  );
}
