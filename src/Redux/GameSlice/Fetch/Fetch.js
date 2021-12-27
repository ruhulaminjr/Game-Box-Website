import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularGames = createAsyncThunk(
  "Games/fetchpopulargames",
  async () => {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=40acf6a51cbc493e972438828aaecd9d"
    );

    return await response.data.results;
  }
);
// fetching highrated games
export const fetchHighRatedGames = createAsyncThunk(
  "Games/fetchRatedgames",
  async () => {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=40acf6a51cbc493e972438828aaecd9d&dates=2019-10-10,2021-10-10&ordering=-added"
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

export const fetchGameVideo = createAsyncThunk(
  "Games/fetchGameVideo",
  async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/ruhulaminjr/Website-Images/main/api/gamedata.json"
    );
    return await response.data
  }
);
