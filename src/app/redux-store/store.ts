"use client";

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";

// config the store
const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

// export default the store
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
