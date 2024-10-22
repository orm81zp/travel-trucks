import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCatalog,
  selectLoading,
  selectError,
  selectTotal,
} from "../../redux/catalog/selectors";
import css from "./CatalogList.module.css";
import TruckCard from "../TruckCard/TruckCard";
import Loader from "../Loader/Loader";
import { fetchCatalog, fetchMore } from "../../redux/catalog/operations";
import Button from "../Button/Button";
import { CATALOG_LIMIT } from "../../const";
import Message from "../Message/Message";

const CatalogList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loading = useSelector(selectLoading);
  const total = useSelector(selectTotal);
  const error = useSelector(selectError);
  const showLoadMore = useMemo(
    () => page < Math.floor(total / CATALOG_LIMIT),
    [total, page]
  );
  const filteredCatalog = useSelector(selectFilteredCatalog);
  const empty = filteredCatalog.length === 0;

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchMore({ page: nextPage }));
  };

  return (
    <div className={css.wrapper}>
      {error && <span>{error}</span>}
      {empty && (
        <Message>
          Nothing to show. Please, change filters or try to load more.
        </Message>
      )}
      {filteredCatalog.map((truck) => (
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
