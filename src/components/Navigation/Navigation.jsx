import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../../const";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "../styles/navigation.module.css";

const buildClassName = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={buildClassName} to={ROUTERS.HOME}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildClassName} to={ROUTERS.CONTACTS}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
