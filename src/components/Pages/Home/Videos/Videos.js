import React, { useEffect } from "react";
// Import Swiper React componentsdis
import Video from "./Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameVideo } from "../../../../Redux/GameSlice/Fetch/Fetch";

const Videos = () => {
  const { gameVideos } = useSelector((state) => state.Games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGameVideo());
  }, [dispatch]);
  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between flex-wrap my-5">
        <h1 className="text-2xl text-gray-900 font-bold">Exclusive Videos</h1>
      </div>
      <div className="py-6 grid xs:grid-cols-1 md:grid-cols-3 gap-5">
        {gameVideos.slice(0, 3).map((game) => (
          <Video game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
