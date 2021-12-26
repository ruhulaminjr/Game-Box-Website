// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videoIcon from "../../../../images/Icon.png";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameVideo } from "../../../../Redux/GameSlice/Fetch/Fetch";
import Videomodal from "../Videos/VideoModal/Videomodal";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header() {
  const { gameVideos } = useSelector((state) => state.Games);
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGameVideo());
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(https://raw.githubusercontent.com/ruhulaminjr/Website-Images/main/gamebox/godofwar.jpg)`,
      }}
      className="w-full bg-cover h-96"
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center flex flex-col gap-5 items-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-white uppercase lg:text-3xl">
            God Of War{" "}
          </h1>
          <p className="text-white text-md w-full md:w-2/3 lg:w-1/2">
            His vengeance against the Gods of Olympus years behind him, Kratos
            now lives as a man in the realm of Norse Gods and monsters
            
          </p>
          <div>
            <button
              className="primary-btn flex items-center gap-2"
              onClick={openModal}
            >
              <img src={videoIcon} alt="" /> Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <Videomodal
        modal={modal}
        setModal={setModal}
        videoLoading={videoLoading}
        setVideoLoading={setVideoLoading}
        openModal={openModal}
        spinner={spinner}
        video={"https://www.youtube.com/embed/K0u_kAWLJOA"}
      />
    </div>
  );
}
