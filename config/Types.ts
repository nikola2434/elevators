export interface IElevator {
  _id: number;
  currentLevel: number;
  stack: number[];
}

export interface ILevel {
  countLevel: number;
  isActive: boolean;
  _id: number;
}
