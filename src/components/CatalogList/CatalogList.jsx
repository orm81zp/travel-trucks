import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectTotal,
  selectCatalog,
  selectPage,
} from "../../redux/catalog/selectors";
import css from "./CatalogList.module.css";
import TruckCard from "../TruckCard/TruckCard";
import Loader from "../Loader/Loader";
import { fetchCatalog, fetchMore } from "../../redux/catalog/operations";
import Button from "../Button/Button";
import { CATALOG_LIMIT } from "../../const";
import Message from "../Message/Message";
import { updatePage } from "../../redux/catalog/slice";

const CatalogList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const total = useSelector(selectTotal);
  const error = useSelector(selectError);
  const catalog = useSelector(selectCatalog);
  const page = useSelector(selectPage);
  const empty = catalog.length === 0;
  const showLoadMore = !empty && page < Math.ceil(total / CATALOG_LIMIT);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(updatePage(nextPage));
    dispatch(fetchMore({ page: nextPage }));
  };

  return (
    <div className={css.wrapper}>
      {error && <Message>{error}</Message>}
      {!loading && !error && empty && <Message>No data to display.</Message>}
      {catalog.map((truck) => (
        <TruckCard key={truck.id} data={truck} />
      ))}
      {loading && <Loader />}
      {showLoadMore && (
        <div className={css.loadmore}>
          <Button variant="secondary" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default CatalogList;
