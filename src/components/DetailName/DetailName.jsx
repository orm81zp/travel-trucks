import css from "./DetailName.module.css";

const DetailName = ({ name }) => {
  return <h2 className={css.name}>{name}</h2>;
};

export default DetailName;
