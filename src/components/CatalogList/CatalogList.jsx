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
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../Button/Button";
import { CATALOG_LIMIT } from "../../const";

const CatalogList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loading = useSelector(selectLoading);
  const total = useSelector(selectTotal);
  const error = useSelector(selectError);
  const filteredCatalog = useSelector(selectFilteredCatalog);
  const showLoadMore = useMemo(
    () => page < Math.floor(total / CATALOG_LIMIT),
    [total, page]
  );

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
    dispatch(fetchMore({ page: page + 1 }));
  }, [dispatch, page]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.wrapper}>
      {error && <span>{error}</span>}
      {!error &&
        filteredCatalog.map((truck) => (
          <TruckCard key={truck.id} data={truck} />
        ))}
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
