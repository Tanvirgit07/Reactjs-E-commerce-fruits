// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Swiper_five.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Swiper_five = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[62vh] border-2">
            <div className="">
              <div>
                <img
                  className="h-60 p-3 bg-cover object-cover"
                  src="https://i.ibb.co.com/fdxkNC4/f3.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <div className="flex justify-between text-sm text-[#6DAC23]">
                  <h1>16/12/2024</h1>
                  <h1>2 Comments</h1>
                </div>
                <h1 className="text-start text-[17px] font-semibold mt-3">
                  Lorem ipsum dolor sit amet...
                </h1>
                <p className="text-start text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremquet...
                </p>
                <p className="text-start text-xs mt-2 text-[#6DAC23]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiper_five;
