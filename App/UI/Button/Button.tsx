import { FC } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";

const Button: FC<IButton> = ({ onClick, children, ...rest }) => {
  return (
    <button onClick={onClick} className={style.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
