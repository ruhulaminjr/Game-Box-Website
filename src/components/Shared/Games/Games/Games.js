import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import rightIcon from "../../../../images/ChevronRight.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import GameCards from "../GameCard/GameCards";

SwiperCore.use([Pagination]);
const Games = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-gray-900 font-bold">Popular Games</h1>
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
          <SwiperSlide>
            <GameCards />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Games;
