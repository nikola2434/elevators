import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { elevatorSlice } from "./elevators/elevatorSlice";

const rootReducer = combineReducers({
  elevators: elevatorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
