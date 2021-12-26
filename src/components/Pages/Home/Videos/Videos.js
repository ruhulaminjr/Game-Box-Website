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
import { useSelector } from "react-redux";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Videos = () => {
  const { gameVideos } = useSelector((state) => state.Games);

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between flex-wrap my-5">
        <h1 className="text-2xl text-gray-900 font-bold">Exclusive Videos</h1>
        <button className="flex gap-2 text-red-700 items-center">
          See more <img src={rightIcon} alt="" />
        </button>
      </div>
      <div className="py-6 grid xs:grid-cols-1 md:grid-cols-3 gap-5">
        {gameVideos.slice(0,3).map((game) => (
          <Video game={game} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
