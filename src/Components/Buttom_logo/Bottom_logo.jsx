// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Bottom_logo.css";

// import required modules
import { FreeMode } from "swiper/modules";

const Bottom_logo = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="h-[30vh] border w-full">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] border w-[80%]">
            <img
              className="w-full h-full p-5"
              src="https://i.ibb.co.com/hZJWHfP/l1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bottom_logo;