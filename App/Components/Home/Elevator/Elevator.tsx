import { FC } from "react";
import cn from "classnames";
import style from "./Elevator.module.scss";

export const Elevator: FC = () => {
  return (
    <div className={style.container}>
      <div className={cn(style.elevator)}></div>
    </div>
  );
};
