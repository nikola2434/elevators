import { FC } from "react";
import { useAppSelector } from "../../../config/Hooks/useAppSelector";
import { Elevator } from "./Elevator/Elevator";
import { Head } from "./Head/Head";
import style from "./Home.module.scss";
import { Level } from "./Level/Level";

const Home: FC = () => {
  const { elevators, levels } = useAppSelector((state) => state.elevators);
  return (
    <div className={style.home}>
      <Head />
      <div className={style.container}>
        <div className={style.elevators}>
          {elevators.map((elevator) => (
            <Elevator key={elevator._id} elevator={elevator} />
          ))}
        </div>
        <div className={style.levels}>
          {levels.map((level) => (
            <Level key={level._id} level={level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
