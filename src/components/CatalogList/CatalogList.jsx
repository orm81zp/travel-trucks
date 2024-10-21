import { useSelector } from "react-redux";
import { selectFilteredCatalog } from "../../redux/catalog/selectors";
import css from "./CatalogList.module.css";
import TruckCard from "../TruckCard/TruckCard";

const CatalogList = () => {
  const filteredCatalog = useSelector(selectFilteredCatalog);

  return ( 
    <>
      <div className={css.wrapper}>
        {filteredCatalog.map((truck) => (
          <TruckCard key={truck.id} data={truck} />
        ))}
      </div>
    </>
  );
};

export default CatalogList;
