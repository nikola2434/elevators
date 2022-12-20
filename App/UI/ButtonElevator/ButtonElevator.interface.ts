import { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  isActive: boolean;
}

type ButtonElevator = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButtonElevator extends Omit<ButtonElevator, "children"> {}
