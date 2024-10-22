import { createSelector } from "@reduxjs/toolkit";
import {
  selectFilterLocation,
  selectFilterType,
  selectFilterEquipments,
} from "../filters/selectors";

export const selectCatalog = (state) => state.catalog.items;
export const selectLoading = (state) => state.catalog.loading;
export const selectTotal = (state) => state.catalog.total;
export const selectError = (state) => state.catalog.error;

const sortByName = (contact1, contact2) => {
  if (contact1.name < contact2.name) {
    return -1;
  }
  if (contact1.name > contact2.name) {
    return 1;
  }
  return 0;
};

export const selectFilteredCatalog = createSelector(
  [
    selectCatalog,
    selectFilterLocation,
    selectFilterType,
    selectFilterEquipments,
  ],
  (catalog, filterLocation, filterType, filterEquipments) => {
    const filteredCatalog = catalog
      .filter(({ location, form, ...props }) => {
        let hasSomeProps = true;

        for (let equipment of filterEquipments) {
          const { name, value } = equipment;
          if (props.hasOwnProperty(name)) {
            if (props[name] !== value) {
              hasSomeProps = false;
            }
          }
        }

        return (
          location.toLowerCase().includes(filterLocation.toLowerCase()) &&
          form.includes(filterType) &&
          hasSomeProps
        );
      })
      .sort(sortByName);

    return filteredCatalog;
  }
);
