import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../Redux/GameSlice/GamesSlice";
export const store = configureStore({
  reducer: {
    Games: gamesReducer,
  },
});
