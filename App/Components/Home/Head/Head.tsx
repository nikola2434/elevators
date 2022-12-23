import { FC } from "react";
import { useAppDispatch } from "../../../../config/Hooks/useAppDispatch";
import {
  addElevator,
  addLevel,
} from "../../../../store/elevators/elevatorSlice";
import Button from "../../../UI/Button/Button";
import style from "./Head.module.scss";

export const Head: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.head}>
      <Button onClick={() => dispatch(addLevel())}>Добавить этаж</Button>
      <Button onClick={() => dispatch(addElevator())}>Добавить лифт</Button>
    </div>
  );
};
