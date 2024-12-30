import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../styles/Slider.css'; 

import slide1 from '../../assets/slider/slide1.jpg';
import slide2 from '../../assets/slider/slide2.jpg';
import slide3 from '../../assets/slider/slide3.jpg';

const Slider = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="zoom-in-right">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
