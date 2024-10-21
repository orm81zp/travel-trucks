import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import Button from "../Button/Button";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome back, {name}</p>
      <Button
        onClick={handleClick}
        variant={Button.variants.OUTLINED}
        size={Button.sizes.SMALL}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
