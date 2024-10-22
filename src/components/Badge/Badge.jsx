import clsx from "clsx";
import css from "./Badge.module.css";

const Badge = ({ children, icon }) => {
  const classname = clsx(css.defaultBadge, css.badgeInline);

  return (
    <span className={classname}>
      {icon && <span className={css.icon}>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
