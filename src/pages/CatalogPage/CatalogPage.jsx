import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";

import css from "./CatalogPage.module.css";
import { fetchCatalog } from "../../redux/catalog/operations";
import CatalogList from "../../components/CatalogList/CatalogList";
import { selectError, selectLoading } from "../../redux/catalog/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Container>
      <div className={css.wrapper}>
        <div className={css.sidebar}>SideBar</div>
        <div>
          <div>{error && <span>{error}</span>}</div>
          {loading ? <Loader /> : <CatalogList />}
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
