// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleBox from './ArticleBox';

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
          <ArticleBox />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleBox />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleBox />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
