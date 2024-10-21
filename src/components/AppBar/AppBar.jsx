import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.brand}>Travel<span className={css.highlight}>Trucks</span></div>
          <div className={css.nav}>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
