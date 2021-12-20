import { createSlice } from "@reduxjs/toolkit";
import { fetchGameDetails, fetchHighRatedGames, fetchPopularGames } from "./Fetch/Fetch";

const initialState = {
  popularGames: [],
  highRatedGames: [],
  searchedGames: [],
  featuresGames: [],
  purchaseGame:[],
};

export const GamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
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
  },
});
// Action creators are generated for each case reducer function
export const { increment } = GamesSlice.actions;

export default GamesSlice.reducer;
