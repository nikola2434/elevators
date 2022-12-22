import { useAppDispatch } from "./../../../../config/Hooks/useAppDispatch";
import { useEffect, useRef, useState } from "react";
import { IElevator } from "./../../../../config/Types";
import {
  changeCurrentLevel,
  removeLevelStack,
  toggleIsWorks,
} from "../../../../store/elevators/elevatorSlice";

export const useMove = (elevator: IElevator) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [level, setLevel] = useState<number | null>(null);
  const [lastLevel, setLastLevel] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ref.current || !elevator.stack.length || elevator.isWorks) return;
    setLastLevel(elevator.currentLevel);
    dispatch(toggleIsWorks(elevator._id));
    const lvl = elevator.stack[elevator.stack.length - 1];
    dispatch(changeCurrentLevel({ idElevator: elevator._id, level: lvl }));
    let coordY = elevator.currentLevel * 100;
    setLevel(lvl + 1);
    const timer = setInterval(frame, 10);
    function frame() {
      if (coordY === lvl * 100) {
        clearInterval(timer);
        setIsResting(true);
        setTimeout(() => {
          dispatch(toggleIsWorks(elevator._id));
          setIsResting(false);
          setLevel(null);
          dispatch(removeLevelStack({ id: elevator._id, level: lvl }));
        }, 3000);
      } else {
        if (elevator.currentLevel < lvl) {
          coordY++;
        } else {
          coordY--;
        }
        if (ref.current) ref.current.style.bottom = coordY + "px";
      }
    }
  }, [elevator]);

  return { ref, isResting, level, lastLevel };
};
