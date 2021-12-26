import React from "react";
import playIcon from "../../../../../images/playIcon.png";
const Video = ({game}) => {
  return (
    <div>
      <div className="relative">
        <img
          src={game.img}
          alt=""
          className=" w-full"
        />
        <img
          src={playIcon}
          className="absolute inset-1/2	cursor-pointer		"
          alt=""
          style={{ transform: "translate(-50%,-50%)" }}
        />
      </div>
      <p className="font-bold text-gray-800 py-2">
        {game.name}
      </p>
    </div>
  );
};

export default Video;
