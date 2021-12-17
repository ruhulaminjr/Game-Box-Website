import React from "react";
import playIcon from "../../../../../images/playIcon.png";
const Video = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://www.dsogaming.com/wp-content/uploads/2019/08/ECkOGrGXsAAfKjM.jpg"
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
        The Suicide Squad : John Cena Interview
      </p>
    </div>
  );
};

export default Video;
