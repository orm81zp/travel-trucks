import { createSelector } from "@reduxjs/toolkit";
import { selectSearchFilter } from "../filters/selectors";

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
  [selectCatalog, selectSearchFilter],
  (catalog, searchFilter) => {
    return catalog
      .filter(({ name }) =>
        name.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .sort(sortByName);
  }
);
