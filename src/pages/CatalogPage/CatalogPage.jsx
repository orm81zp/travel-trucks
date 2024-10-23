import Container from "../../components/Container/Container";
import css from "./CatalogPage.module.css";
import CatalogList from "../../components/CatalogList/CatalogList";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setFilters } from "../../redux/filters/slice";
import { parseQueryAsObject } from "../../utils/format";
import { fetchCatalog } from "../../redux/catalog/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchType = searchParams.get("type") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchEquipments = parseQueryAsObject(searchParams.get("equipments"));

  useEffect(() => {
    dispatch(
      setFilters({
        type: searchType,
        location: searchLocation,
        equipments: searchEquipments,
      })
    );
    dispatch(fetchCatalog());
  }, [searchType, searchLocation, searchEquipments, dispatch]);

  return (
    <Container>
      <h1 className="visually-hidden">Catalog</h1>
      <div className={css.wrapper}>
        <div className={css.sidebar}>
          <CatalogSideBar />
        </div>
        <div className={css.content}>
          <CatalogList />
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
