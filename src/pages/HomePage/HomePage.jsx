import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { ROUTERS } from "../../const";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <Container>
        <div className={css.hero}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.description}>
            You can find everything you want in our catalog
          </h2>
          <Button to={ROUTERS.CATALOG}>View Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
