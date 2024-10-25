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
    <ul className={css.wrapper}>
      {transmission && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsDiagram3 />
          </span>
          {transmission}
        </li>
      )}
      {engine && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsFuelPump />
          </span>
          {engine}
        </li>
      )}
      {kitchen && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsCupHot />
          </span>
          Kitchen
        </li>
      )}
      {AC && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsWind />
          </span>
          AC
        </li>
      )}
      {TV && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsTv />
          </span>
          TV
        </li>
      )}
      {bathroom && (
        <li className={css.badge}>
          <span className={css.icon}>
            <PiShower />
          </span>
          Bathroom
        </li>
      )}
      {refrigerator && (
        <li className={css.badge}>
          <span className={css.icon}>
            <TbFridge />
          </span>
          Refrigerator
        </li>
      )}
      {microwave && (
        <li className={css.badge}>
          <span className={css.icon}>
            <LuMicrowave />
          </span>
          Microwave
        </li>
      )}
      {radio && (
        <li className={css.badge}>
          <span className={css.icon}>
            <BsUiRadios />
          </span>
          Radio
        </li>
      )}
      {gas && (
        <li className={css.badge}>
          <span className={css.icon}>
            <PiOvenLight />
          </span>
          Gas
        </li>
      )}
      {water && (
        <li className={css.badge}>
          <span className={css.icon}>
            <IoWaterOutline />
          </span>
          Water
        </li>
      )}
    </ul>
  );
};

export default Features;
