import { getInitialElevators, getInitialLevels } from "./elevatorHelper";
import { IInitialStateElevator } from "./elevatorSlice.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialStateElevator = {
  elevators: getInitialElevators(),
  levels: getInitialLevels(),
};

export const elevatorSlice = createSlice({
  name: "elevators",
  initialState,
  reducers: {},
});
