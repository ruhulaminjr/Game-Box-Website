import { createSlice } from "@reduxjs/toolkit";

import {
  fetchGameDetails,
  fetchGameSearch,
  fetchGameVideo,
  fetchHighRatedGames,
  fetchPopularGames,
} from "./Fetch/Fetch";
const initialState = {
  popularGames: [],
  highRatedGames: [],
  searchedGames: [],
  featuresGames: [],
  gameVideos: [],
  purchaseGame: [],
  myCarts: [],
};

export const GamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      state.myCarts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPopularGames.fulfilled, (state, action) => {
      state.popularGames = action.payload;
    });
    builder.addCase(fetchHighRatedGames.fulfilled, (state, action) => {
      state.highRatedGames = action.payload;
    });
    builder.addCase(fetchGameDetails.fulfilled, (state, action) => {
      state.highRatedGames = action.payload;
    });
    builder.addCase(fetchGameVideo.fulfilled, (state, action) => {
      state.gameVideos = action.payload;
    });
    builder.addCase(fetchGameSearch.fulfilled, (state, action) => {
      state.searchedGames = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { AddtoCart } = GamesSlice.actions;

export default GamesSlice.reducer;
