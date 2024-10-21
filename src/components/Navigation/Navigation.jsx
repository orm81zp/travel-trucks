import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../../const";
import css from "../styles/navigation.module.css";

const buildClassName = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={buildClassName} to={ROUTERS.HOME}>
        Home
      </NavLink>
      <NavLink className={buildClassName} to={ROUTERS.CATALOG}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
