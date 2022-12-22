import { IElevator, ILevel } from "./../../config/Types";

export const getInitialElevators = (initialCount: number = 1): IElevator[] => {
  const elevators: IElevator[] = [];
  for (let i = 0; i < initialCount; i++) {
    elevators.unshift({
      _id: Math.random(),
      currentLevel: 0,
      stack: [],
      isWorks: false,
    });
  }
  return elevators;
};

export const getInitialLevels = (initialCount: number = 5): ILevel[] => {
  const levels: ILevel[] = [];
  for (let i = 0; i < initialCount; i++) {
    levels.unshift({ _id: Math.random(), countLevel: i, isActive: false });
  }
  return levels;
};
