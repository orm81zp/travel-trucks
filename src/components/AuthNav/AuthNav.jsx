import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../../const";
import css from "../styles/navigation.module.css";

const buildClassName = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={buildClassName} to={ROUTERS.REGISTER}>
        Register
      </NavLink>
      <NavLink className={buildClassName} to={ROUTERS.LOGIN}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
