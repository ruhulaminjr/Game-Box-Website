import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import rightIcon from "../../../../images/ChevronRight.png";
import GameCards from "../GameCard/GameCards";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchHighRatedGames,
  fetchPopularGames,
} from "../../../../Redux/GameSlice/Fetch/Fetch";
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
const Games = () => {
  const { popularGames, highRatedGames } = useSelector((state) => state.Games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularGames());
    dispatch(fetchHighRatedGames());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl text-gray-900 font-bold">Popular Games</h1>
        <Link
          to={`/seemore/popular`}
          className="flex gap-2 text-red-700 items-center"
        >
          See more <img src={rightIcon} alt="" />
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
        {popularGames.slice(0, 11).map((game) => (
          <SwiperSlide key={game.id}>
            <div className="py-8">
              <GameCards game={game} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* higest rated games  */}
      <div className="flex items-center justify-between flex-wrap my-5">
        <h1 className="text-2xl text-gray-900 font-bold">Highest Rated</h1>
        <button className="flex gap-2 text-red-700 items-center">
          See more <img src={rightIcon} alt="" />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
        {highRatedGames.slice(0, 10).map((game) => (
          <SwiperSlide key={game.id}>
            <div className="py-8">
              <GameCards game={game} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Games;
