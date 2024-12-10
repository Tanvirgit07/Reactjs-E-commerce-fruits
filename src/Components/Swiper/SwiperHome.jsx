import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperHome.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const SwiperHome = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Time in milliseconds between slides (e.g., 3000 = 3 seconds)
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover bg-cover"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHome;
