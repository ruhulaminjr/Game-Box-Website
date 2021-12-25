import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import rightIcon from "../../../../images/ChevronRight.png";
import Video from "./Video/Video";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Videos = () => {
  const number = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between flex-wrap my-5">
        <h1 className="text-2xl text-gray-900 font-bold">Exclusive Videos</h1>
        <button className="flex gap-2 text-red-700 items-center">
          See more <img src={rightIcon} alt="" />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper flex gap-8"
      >
        {number.map((num, idx) => (
          <SwiperSlide key={idx}>
            <Video />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videos;
