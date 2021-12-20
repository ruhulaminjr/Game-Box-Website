
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videoIcon from "../../../../images/Icon.png";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header() {
  const number = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper absolute top-0 left-0"
      >
        {number.map((num, idx) => (
          <SwiperSlide
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
            }}
            className="w-full bg-center bg-cover h-96"
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
              <div className="text-center flex flex-col gap-5 items-center">
                <h1 className="text-2xl md:text-4xl font-semibold text-white uppercase lg:text-3xl">
                  John Wick 3 : Parabellum
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
