import { FC } from "react";
import style from "./Indicator.module.scss";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface IndicatorProps {
  direction: "up" | "down";
  level: number;
}

const Indicator: FC<IndicatorProps> = ({ direction, level }) => {
  return (
    <div className={style.indicator}>
      <div className={style.container_arrow}>
        {direction === "up" ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </div>
      <div className={style.level}>{level}</div>
    </div>
  );
};

export default Indicator;
