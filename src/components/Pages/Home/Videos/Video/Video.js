import React, { useState } from "react";
import playIcon from "../../../../../images/playIcon.png";
import Videomodal from "../VideoModal/Videomodal";

const Video = ({ game }) => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
      <div>
        <div className="relative">
          <img src={game.img} alt="" className=" w-full" />
          <img
            src={playIcon}
            className="absolute inset-1/2	cursor-pointer		"
            alt=""
            style={{ transform: "translate(-50%,-50%)" }}
            onClick={openModal}
          />
        </div>
        <p className="font-bold text-gray-800 py-2">{game.name}</p>
        <Videomodal
          modal={modal}
          setModal={setModal}
          videoLoading={videoLoading}
          setVideoLoading={setVideoLoading}
          openModal={openModal}
          spinner={spinner}
          video={game.video}
        />
      </div>
  );
};

export default Video;
