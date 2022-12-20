export interface IElevator {
  _id: number;
  currentLevel: number;
  stack: number[];
  isWorks: boolean;
  isResting: boolean;
}

export interface ILevel {
  countLevel: number;
  isActive: boolean;
  _id: number;
}
