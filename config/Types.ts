export interface IElevator {
  _id: number;
  currentLevel: number;
  isWorks: boolean;
  stack: number[];
}

export interface ILevel {
  countLevel: number;
  isActive: boolean;
  _id: number;
}
