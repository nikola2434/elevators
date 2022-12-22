import { FC } from "react";
import { useAppDispatch } from "../../../../config/Hooks/useAppDispatch";
import { ILevel } from "../../../../config/Types";
import { callElevator } from "../../../../store/elevators/elevatorSlice";
import ButtonElevator from "../../../UI/ButtonElevator/ButtonElevator";
import style from "./Level.module.scss";

export const Level: FC<{ level: ILevel }> = ({ level }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.level}>
      <ButtonElevator
        isActive={level.isActive}
        onClick={() => dispatch(callElevator(level))}
      />
    </div>
  );
};
