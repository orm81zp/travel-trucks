import Container from "../../components/Container/Container";
import css from "./CatalogPage.module.css";
import CatalogList from "../../components/CatalogList/CatalogList";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";

const CatalogPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <div className={css.sidebar}>
          <CatalogSideBar />
        </div>
        <CatalogList />
      </div>
    </Container>
  );
};

export default CatalogPage;
