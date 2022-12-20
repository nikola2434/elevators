import { FC } from "react";
import { IButtonElevator } from "./ButtonElevator.interface";
import style from "./ButtonElevator.module.scss";
import cn from "classnames";

const ButtonElevator: FC<IButtonElevator> = ({
  isActive,
  onClick,
  ...rest
}) => {
  return (
    <button
      disabled={isActive}
      onClick={onClick}
      className={cn(style.button, { [style.active]: isActive })}
      {...rest}
    >
      <div />
    </button>
  );
};

export default ButtonElevator;
