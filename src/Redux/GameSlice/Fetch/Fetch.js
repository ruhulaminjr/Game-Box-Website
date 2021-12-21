import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import useFirebase from "../../../hooks/useFirebase";

export const fetchPopularGames = createAsyncThunk(
  "Games/fetchpopulargames",
  async () => {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=40acf6a51cbc493e972438828aaecd9d"
    );
    console.log(response.data.results);

    return await response.data.results;
  }
);
// fetching highrated games
export const fetchHighRatedGames = createAsyncThunk(
  "Games/fetchRatedgames",
  async () => {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=40acf6a51cbc493e972438828aaecd9d&ordering=-rating"
    );

    return await response.data.results;
  }
);

export const fetchGameDetails = createAsyncThunk(
  "Games/fetchGameDetails",
  async (id) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=40acf6a51cbc493e972438828aaecd9d`
    );

    return await response.data.results;
  }
);