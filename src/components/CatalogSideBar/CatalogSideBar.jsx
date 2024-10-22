import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import SearchBox from "../SearchBox/SearchBox";
import SectionName from "../SectionName/SectionName";
import FIlterBadge from "../FIlterBadge/FIlterBadge";
import { parseQueryAsObject, setObjectAsQuery } from "../../utils/format";

const CatalogSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchType = searchParams.get("type") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchEquipments = parseQueryAsObject(searchParams.get("equipments"));
  const [vehicleEquipments, setVehicleEquipments] = useState(
    searchEquipments || []
  );
  const [location, setLocation] = useState(searchLocation);
  const [vehicleType, setVehicleType] = useState(searchType);

  useEffect(() => {
    dispatch(
      setFilters({
        type: searchType,
        location: searchLocation,
        equipments: searchEquipments,
      })
    );
  }, [searchType, searchLocation, searchEquipments, dispatch]);

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

  const handleChangeLocation = (value) => {
    setLocation(value);
  };

  const handleClickEquipment = (name, value) => () => {
    const found = vehicleEquipments.find(
      (el) => el.name === name && el.value === value
    );
    if (found) {
      const filtered = vehicleEquipments.filter((el) => el.name !== name);
      setVehicleEquipments(filtered);
    } else {
      const newVehicleEquipments = [...vehicleEquipments];
      newVehicleEquipments.push({ name, value });
      setVehicleEquipments(newVehicleEquipments);
    }
  };

  const handleClickType = (value) => () => {
    if (vehicleType === value) {
      setVehicleType("");
    } else {
      setVehicleType(value);
    }
  };

  const handleSearch = () => {
    dispatch(
      setFilters({
        location,
        type: vehicleType,
        equipments: vehicleEquipments,
      })
    );
    setSearchParams((params) => {
      params.set("location", location);
      params.set("type", vehicleType);
      params.set("equipments", setObjectAsQuery(vehicleEquipments));

      return params;
    });
  };

  return (
    <div className={css.wrapper}>
      <div className={css.section}>
        <SearchBox value={location} onChange={handleChangeLocation} />
      </div>
      <div className={css.section}>
        <div className={css.sectionName}>Filters</div>
        <div className={css.sectionGroup}>
          <SectionName>Vehicle equipment</SectionName>
          <div className={css.equipmentsList}>
            {equipments.map((equipment) => {
              const isActive = vehicleEquipments.find(
                (el) =>
                  el.name === equipment.value && el.value === equipment.data
              );
              return (
                <FIlterBadge
                  key={equipment.name}
                  icon={equipment.icon}
                  isActive={isActive}
                  onClick={handleClickEquipment(
                    equipment.value,
                    equipment.data
                  )}
                >
                  {equipment.name}
                </FIlterBadge>
              );
            })}
          </div>
        </div>
        <div className={css.sectionGroup}>
          <SectionName>Vehicle type</SectionName>
          <div className={css.equipmentsList}>
            {types.map((type) => (
              <FIlterBadge
                key={type.name}
                icon={type.icon}
                isActive={vehicleType === type.value}
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
