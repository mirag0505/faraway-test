import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterReducer";

export const store = configureStore({
  reducer: {
    counter
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;