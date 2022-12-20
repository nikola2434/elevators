import { configureStore } from "@reduxjs/toolkit";
import { elevatorSlice } from "./elevators/elevatorSlice";

export const store = configureStore({
  reducer: {
    elevators: elevatorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
