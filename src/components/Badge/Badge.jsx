import css from "./Badge.module.css";

const Badge = ({ children, icon }) => {
  return (
    <span className={css.badge}>
      {icon && <span className={css.icon}>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
