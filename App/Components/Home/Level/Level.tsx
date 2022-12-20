import { FC } from "react";
import ButtonElevator from "../../../UI/ButtonElevator/ButtonElevator";
import style from "./Level.module.scss";

export const Level: FC = () => {
  return (
    <div className={style.level}>
      <ButtonElevator isActive={false} />
    </div>
  );
};
