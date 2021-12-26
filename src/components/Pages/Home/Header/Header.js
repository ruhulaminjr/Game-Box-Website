// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videoIcon from "../../../../images/Icon.png";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameVideo } from "../../../../Redux/GameSlice/Fetch/Fetch";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header() {
  const { gameVideos } = useSelector((state) => state.Games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGameVideo());
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper absolute top-0 left-0"
      >
        {gameVideos.map((game) => (
          <SwiperSlide
            style={{
              backgroundImage:
                `url(${game.img})`,
            }}
            className="w-full bg-center bg-cover h-96"
            key={game.id}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
              <div className="text-center flex flex-col gap-5 items-center">
                <h1 className="text-2xl md:text-4xl font-semibold text-white uppercase lg:text-3xl">
                  {game.name}
                </h1>
                <div>
                  <button className="primary-btn flex items-center gap-2">
                    <img src={videoIcon} alt="" /> Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
