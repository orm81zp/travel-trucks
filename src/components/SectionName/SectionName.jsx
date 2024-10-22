import css from "./SectionName.module.css";

const SectionName = ({ children }) => {
  return <h3 className={css.name}>{children}</h3>;
};

export default SectionName;
