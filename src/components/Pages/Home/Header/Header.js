// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videoIcon from "../../../../images/Icon.png";
import { useState } from "react";
import Videomodal from "../Videos/VideoModal/Videomodal";
import Rating from "react-rating";

export default function Header() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://raw.githubusercontent.com/ruhulaminjr/Website-Images/main/gamebox/godofwar.jpg)`,
        backgroundPosition: "center",
      }}
      className="w-full bg-cover h-96 lg:h-1/2"
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
          <Rating
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            initialRating={3.9}
            readonly
          />
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
