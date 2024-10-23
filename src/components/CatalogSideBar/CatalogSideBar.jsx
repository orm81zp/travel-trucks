import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  BsDiagram3,
  BsCupHot,
  BsWind,
  BsTv,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import css from "./CatalogSideBar.module.css";
import Button from "../Button/Button";
import { setFilters } from "../../redux/filters/slice";
import {
  selectFilterEquipments,
  selectFilterLocation,
  selectFilterType,
} from "../../redux/filters/selectors";
import SearchBox from "../SearchBox/SearchBox";
import SectionName from "../SectionName/SectionName";
import FIlterBadge from "../FIlterBadge/FIlterBadge";
import { setObjectAsQuery } from "../../utils/format";
import { fetchCatalog } from "../../redux/catalog/operations";
import { updatePage } from "../../redux/catalog/slice";

const equipments = [
  { icon: <BsWind />, name: "AC", value: "AC", data: true },
  {
    icon: <BsDiagram3 />,
    name: "Automatic",
    value: "transmission",
    data: "automatic",
  },
  { icon: <BsCupHot />, name: "Kitchen", value: "kitchen", data: true },
  { icon: <BsTv />, name: "TV", value: "TV", data: true },
  { icon: <PiShower />, name: "Bathroom", value: "bathroom", data: true },
];
const types = [
  { icon: <BsGrid1X2 />, name: "Van", value: "panelTruck" },
  { icon: <BsGrid />, name: "Fully Integrated", value: "fullyIntegrated" },
  { icon: <BsGrid3X3Gap />, name: "Alcove", value: "alcove" },
];

const CatalogSideBar = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const filterEquipments = useSelector(selectFilterEquipments);
  const filterLocation = useSelector(selectFilterLocation);
  const filterType = useSelector(selectFilterType);
  const [stateType, setStateType] = useState(filterType);
  const [stateLocation, setStateLocation] = useState(filterLocation);
  const [stateEquipments, setStateEquipments] = useState(filterEquipments);

  useEffect(() => {
    setStateType(filterType);
    setStateLocation(filterLocation);
    setStateEquipments(filterEquipments);
  }, [filterType, filterLocation, filterEquipments]);

  const handleChangeLocation = (value) => {
    setStateLocation(value);
  };

  const handleClickEquipment = (data) => () => {
    const found = stateEquipments.find(
      (equipment) => equipment.name === data.name
    );
    if (found) {
      const newStateEquipments = stateEquipments.filter(
        (equipment) => equipment.name !== data.name
      );
      setStateEquipments(newStateEquipments);
    } else {
      const newStateEquipments = [...stateEquipments];
      newStateEquipments.push(data);
      setStateEquipments(newStateEquipments);
    }
  };

  const handleClickType = (value) => () => {
    if (stateType === value) {
      setStateType("");
    } else {
      setStateType(value);
    }
  };

  const handleSearch = () => {
    setSearchParams((params) => {
      params.set("location", stateLocation);
      params.set("type", stateType);
      params.set("equipments", setObjectAsQuery(stateEquipments));
      return params;
    });
    dispatch(
      setFilters({
        type: stateType,
        location: stateLocation,
        equipments: stateEquipments,
      })
    );
    dispatch(updatePage(1));
    dispatch(fetchCatalog({ page: 1 }));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.section}>
        <SearchBox value={stateLocation} onChange={handleChangeLocation} />
      </div>
      <div className={css.section}>
        <div className={css.sectionName}>Filters</div>
        <div className={css.sectionGroup}>
          <SectionName>Vehicle equipment</SectionName>
          <div className={css.filterList}>
            {equipments.map((equipment) => {
              const isActive = stateEquipments.find(
                (el) =>
                  el.name === equipment.value && el.value === equipment.data
              );
              return (
                <FIlterBadge
                  key={equipment.name}
                  icon={equipment.icon}
                  isActive={isActive}
                  onClick={handleClickEquipment({
                    name: equipment.value,
                    value: equipment.data,
                  })}
                >
                  {equipment.name}
                </FIlterBadge>
              );
            })}
          </div>
        </div>
        <div className={css.sectionGroup}>
          <SectionName>Vehicle type</SectionName>
          <div className={css.filterList}>
            {types.map((type) => (
              <FIlterBadge
                key={type.name}
                icon={type.icon}
                isActive={stateType === type.value}
                onClick={handleClickType(type.value)}
              >
                {type.name}
              </FIlterBadge>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default CatalogSideBar;
