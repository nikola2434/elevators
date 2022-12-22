import { FC } from "react";
import cn from "classnames";
import style from "./Elevator.module.scss";
import { IElevator } from "../../../../config/Types";
import { useMove } from "./useMove";
import Indicator from "./Indicator/Indicator";

export const Elevator: FC<{ elevator: IElevator }> = ({ elevator }) => {
  const { ref, isResting, level, lastLevel } = useMove(elevator);
  return (
    <div className={style.container}>
      <div
        className={cn(style.elevator, { [style.resting]: isResting })}
        ref={ref}
      >
        {level && (
          <Indicator
            direction={lastLevel < level ? "up" : "down"}
            level={level}
          />
        )}
      </div>
    </div>
  );
};
