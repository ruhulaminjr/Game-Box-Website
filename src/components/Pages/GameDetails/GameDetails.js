import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Navbar from "../Home/Navbar/Navbar";
import playstation from "../../../images/playstation.png";
import xbox from "../../../images/xbox.png";
import steam from "../../../images/steam.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AddtoCart } from "../../../Redux/GameSlice/GamesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const GameDetails = () => {
  const [game, setGame] = useState({});
  const [screenshot, setScreenshot] = useState([]);
  const dispatch = useDispatch();
  const { myCarts } = useSelector((state) => state.Games);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=40acf6a51cbc493e972438828aaecd9d`
      )
      .then((result) => {
        setGame(result.data);
      });
    axios
      .get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=40acf6a51cbc493e972438828aaecd9d`
      )
      .then((result) => {
        setScreenshot(result.data.results);
      });
  }, [id, myCarts]);
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${game.background_image})`,
        }}
        className="w-screen bg-center bg-cover h-full"
      >
        <div className=" w-full h-full bg-gray-900 bg-opacity-50 ">
          <div className="container mx-auto  pt-36">
            <div className="flex shadow-lg items-center justify-center flex-col gap-5 px-8 py-4">
              <h1 className="text-white text-4xl font-bold">{game.name}</h1>
              <Rating
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                initialRating={3.5}
                readonly
              />
              <div className="flex gap-3">
                <img src={playstation} alt="" width="40px" />
                <img src={xbox} alt="" width="40px" />
                <img src={steam} alt="" width="40px" />
              </div>
                <button
                  className="primary-btn"
                  onClick={() => dispatch(AddtoCart(game))}
                >
                  $29 Add To Cart
                </button>
              <p className="text-white font-bold text-base">
                {game.description_raw}
              </p>
              <h2 className="text-white font-bold text-3xl">Screenshot</h2>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {screenshot.map((item) => (
                  <img
                    src={item.image}
                    alt=""
                    key={item.id}
                    className="xs:w-full md:w-96"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
