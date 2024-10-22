import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { ROUTERS } from "../../const";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.brand}>
            <Link to={ROUTERS.HOME}>
              Travel<span className={css.highlight}>Trucks</span>
            </Link>
          </div>
          <div className={css.nav}>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
