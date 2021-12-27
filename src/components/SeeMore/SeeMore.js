import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchHighRatedGames,
  fetchPopularGames,
} from "../../Redux/GameSlice/Fetch/Fetch";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import GameCards from "../Shared/Games/GameCard/GameCards";

const SeeMore = () => {
  const { category } = useParams();
  const { popularGames, highRatedGames, searchedGames } = useSelector(
    (state) => state.Games
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (category === "rated") {
      dispatch(fetchHighRatedGames());
    }
    if (category === "popular") {
      dispatch(fetchPopularGames());
    }
  }, [category, dispatch]);
  return (
    <div className="bg-gray-700">
      <Navbar isbg={true} />
      <div className="py-24">
        {category === "popular" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {popularGames.map((game) => (
              <GameCards game={game} key={game.id} />
            ))}
          </div>
        )}
        {category === "rated" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {highRatedGames.map((game) => (
              <GameCards game={game} key={game.id} />
            ))}
          </div>
        )}
        {category === "search-result" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {searchedGames.map((game) => (
              <GameCards game={game} key={game.id} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SeeMore;
