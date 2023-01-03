import { configureStore } from "@reduxjs/toolkit";
import { cakeReducers } from "./firstSlice";
import { cake2Reducers } from "./secondSlice";

export const store = configureStore({
  reducer: { cake: cakeReducers, cake2: cake2Reducers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDis = typeof store.dispatch;
