"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ProductCard from '../products/page';
import './style.css';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={false} 
        centeredSlides={true} 
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
      </Swiper>
    </>
  );
}
