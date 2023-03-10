import { IElevator, ILevel } from "./../../config/Types";
import { getInitialElevators, getInitialLevels } from "./elevatorHelper";
import { IInitialStateElevator } from "./elevatorSlice.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialStateElevator = {
  elevators: getInitialElevators(),
  levels: getInitialLevels(),
};

export const elevatorSlice = createSlice({
  name: "elevators",
  initialState,
  reducers: {
    addLevel(state) {
      state.levels.unshift({
        _id: Math.random(),
        countLevel: state.levels.length,
        isActive: false,
      });
    },
    addElevator(state) {
      state.elevators.push({
        _id: Math.random(),
        currentLevel: 0,
        stack: [],
        isWorks: false,
      });
    },

    callElevator(state, action: PayloadAction<ILevel>) {
      // проверяем есть ли лифт на этом этаже
      if (
        state.elevators.find(
          (elevator) => elevator.currentLevel === action.payload.countLevel
        )
      )
        return state;

      // меняем состояние кнопки на этаже
      const level = state.levels.find(
        (level) => level._id === action.payload._id
      );
      if (level) level.isActive = true;

      // если есть свободный лифт, то вызываем его
      const sortElevatorsLength = state.elevators.map((elevator) => elevator); // копия массива лифтов;
      sortElevatorsLength.sort((a, b) => a.stack.length - b.stack.length);
      if (
        sortElevatorsLength.length >= 2 &&
        sortElevatorsLength[0].stack.length ===
          sortElevatorsLength[1].stack.length
      ) {
        sortElevatorsLength.sort(
          (a, b) =>
            Math.abs(a.currentLevel - action.payload.countLevel) -
            Math.abs(b.currentLevel - action.payload.countLevel)
        );
        sortElevatorsLength[0].stack.unshift(action.payload.countLevel);
      } else sortElevatorsLength[0].stack.unshift(action.payload.countLevel);
    },

    removeLevelStack(
      state,
      action: PayloadAction<{ id: number; level: number }>
    ) {
      const elevator = state.elevators.find(
        (elevator) => elevator._id === action.payload.id
      );
      if (elevator) {
        elevator.stack.pop();
      }

      const level = state.levels.find(
        (level) => level.countLevel === action.payload.level
      );
      if (level) level.isActive = false;
    },

    toggleIsWorks(state, action: PayloadAction<number>) {
      const elevator = state.elevators.find(
        (elevator) => elevator._id === action.payload
      );
      if (elevator) elevator.isWorks = !elevator.isWorks;
    },

    changeCurrentLevel(
      state,
      action: PayloadAction<{ idElevator: number; level: number }>
    ) {
      const elevator = state.elevators.find(
        (elevator) => elevator._id === action.payload.idElevator
      );
      if (elevator) elevator.currentLevel = action.payload.level;
    },
  },
});

export const {
  addElevator,
  addLevel,
  callElevator,
  removeLevelStack,
  toggleIsWorks,
  changeCurrentLevel,
} = elevatorSlice.actions;
