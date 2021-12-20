import React from "react";
import Rating from "react-rating";
import "./rate.css";
const GameCards = ({ game }) => {
  console.log(game)
  return (
    <div
      className="bg-gray-100 m-auto w-86 h-64 mt-5"
      style={{
        backgroundImage: `url(${game?.background_image})`,
        backgroundPosition: "ccenter",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row items-end h-full w-full">
        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
          <h3 className="text-base font-bold leading-5 uppercase">
            {game?.name}
          </h3>
          <div className="inline-flex items-center">
            <span className="capitalize font-base text-xs my-1 mr-1">
              {game.released}
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <Rating
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                initialRating={game.rating}
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
