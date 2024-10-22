import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BsMap,
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
import { selectFilterLocation } from "../../redux/filters/selectors";
import clsx from "clsx";
import { changeLocation, setFilters } from "../../redux/filters/slice";
import SearchBox from "../SearchBox/SearchBox";

const VehicleEquipment = ({ children, icon, onClick, isActive }) => {
  return (
    <button
      className={clsx(css.equipment, isActive && css.equipmentActive)}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

const CatalogSideBar = () => {
  const dispatch = useDispatch();
  const [vehicleEquipments, setVehicleEquipments] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const filterLocation = useSelector(selectFilterLocation);
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
    dispatch(changeLocation(value));
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
        type: vehicleType,
        equipments: vehicleEquipments,
      })
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.section}>
        <SearchBox value={filterLocation} onChange={handleChangeLocation} />
      </div>
      <div className={css.section}>
        <div className={css.sectionName}>Filters</div>
        <div className={css.sectionGroup}>
          <h4 className={css.sectionGroupname}>Vehicle equipment</h4>
          <div className={css.equipmentsList}>
            {equipments.map((equipment) => (
              <VehicleEquipment
                key={equipment.name}
                icon={equipment.icon}
                isActive={vehicleEquipments.find(
                  (el) =>
                    el.name === equipment.value && el.value === equipment.data
                )}
                onClick={handleClickEquipment(equipment.value, equipment.data)}
              >
                {equipment.name}
              </VehicleEquipment>
            ))}
          </div>
        </div>
        <div className={css.sectionGroup}>
          <h4 className={css.sectionGroupname}>Vehicle type</h4>
          <div className={css.equipmentsList}>
            {types.map((type) => (
              <VehicleEquipment
                key={type.name}
                icon={type.icon}
                isActive={vehicleType === type.value}
                onClick={handleClickType(type.value)}
              >
                {type.name}
              </VehicleEquipment>
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
