import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameCards from "../Shared/Games/GameCard/GameCards";

const SeeMore = () => {
  const { category } = useParams();
  const { popularGames, highRatedGames } = useSelector((state) => state.Games);
  return (
    <div>
      {category === "popular" && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {popularGames.map((game) => (
            <GameCards game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SeeMore;
