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
      const freeElevator = state.elevators.find(
        (elevator) => elevator.stack.length === 0
      );
      if (freeElevator) {
        freeElevator.stack.unshift(action.payload.countLevel);
        return state;
      }

      // иначе ищем самый близко расположенный лифт и вызываем его
      const elevatorsSort = state.elevators.sort(
        (a, b) =>
          a.currentLevel +
          action.payload.countLevel -
          (b.currentLevel + action.payload.countLevel) // пока так, но потом вернусь;)
      );
      elevatorsSort[0].stack.unshift(action.payload.countLevel);
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
