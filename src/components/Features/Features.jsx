import css from "./Features.module.css";
import {
  BsDiagram3,
  BsCupHot,
  BsFuelPump,
  BsTv,
  BsWind,
  BsUiRadios,
} from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { PiShower, PiOvenLight } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import Badge from "../Badge/Badge";

const Features = ({ data }) => {
  const {
    kitchen,
    TV,
    bathroom,
    AC,
    refrigerator,
    transmission,
    gas,
    water,
    radio,
    microwave,
    engine,
  } = data;

  return (
    <div className={css.wrapper}>
      {transmission && <Badge icon={<BsDiagram3 />}>{transmission}</Badge>}
      {engine && <Badge icon={<BsFuelPump />}>{engine}</Badge>}
      {kitchen && <Badge icon={<BsCupHot />}>Kitchen</Badge>}
      {AC && <Badge icon={<BsWind />}>AC</Badge>}
      {TV && <Badge icon={<BsTv />}>TV</Badge>}
      {bathroom && <Badge icon={<PiShower />}>Bathroom</Badge>}
      {refrigerator && <Badge icon={<TbFridge />}>Refrigerator</Badge>}
      {microwave && <Badge icon={<LuMicrowave />}>Microwave</Badge>}
      {radio && <Badge icon={<BsUiRadios />}>Radio</Badge>}
      {gas && <Badge icon={<PiOvenLight />}>Gas</Badge>}
      {water && (
        <Badge inline={false} icon={<IoWaterOutline />}>
          Water
        </Badge>
      )}
    </div>
  );
};

export default Features;
