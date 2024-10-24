import css from "./DetailName.module.css";
import clsx from "clsx";

const DetailName = ({ name, overflow = true }) => {
  const className = clsx(overflow && css.overflow);

  return <h2 className={className}>{name}</h2>;
};

export default DetailName;
