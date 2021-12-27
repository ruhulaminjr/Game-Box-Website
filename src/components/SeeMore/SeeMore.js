import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import GameCards from "../Shared/Games/GameCard/GameCards";

const SeeMore = () => {
  const { category } = useParams();
  const { popularGames, highRatedGames } = useSelector((state) => state.Games);
  return (
    <div className="bg-gray-800">
      <Navbar isbg={true}/>
      <div className="py-24">
        {category === "popular" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {popularGames.map((game) => (
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
