import { configureStore } from "@reduxjs/toolkit";
import dragonsReducer from "./rocketsSlice";

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});
