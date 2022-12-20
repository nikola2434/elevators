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
  reducers: {
    addLevel(state) {
      state.levels.push({
        _id: Math.random(),
        countLevel: state.levels.length,
        isActive: false,
      });
    },
    addElevator(state) {
      state.elevators.push({
        _id: Math.random(),
        currentLevel: state.elevators.length,
        stack: [],
        isResting: false,
        isWorks: false,
      });
    },
  },
});

export const { addElevator, addLevel } = elevatorSlice.actions;
