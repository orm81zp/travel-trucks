import css from "./DetailName.module.css";

const DetailName = ({ name }) => {
  return <h3 className={css.name}>{name}</h3>;
};

export default DetailName;
