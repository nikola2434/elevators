import { IElevator, ILevel } from "./../../config/Types";

export const getInitialElevators = (initialCount: number = 1): IElevator[] => {
  const elevators: IElevator[] = [];
  for (let i = 0; i < initialCount; i++) {
    elevators.push({ _id: Math.random(), currentLevel: 0, stack: [] });
  }
  return elevators;
};

export const getInitialLevels = (initialCount: number = 5): ILevel[] => {
  const levels: ILevel[] = [];
  for (let i = 0; i < initialCount; i++) {
    levels.push({ _id: Math.random(), countLevel: i, isActive: false });
  }
  return levels;
};
