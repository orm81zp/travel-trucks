import { createSelector } from "@reduxjs/toolkit";
import { selectSearchFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

const sortByName = (contact1, contact2) => {
  if (contact1.name < contact2.name) {
    return -1;
  }
  if (contact1.name > contact2.name) {
    return 1;
  }
  return 0;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchFilter],
  (contacts, searchFilter) => {
    return contacts
      .filter(
        ({ name, number }) =>
          name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          number.includes(searchFilter)
      )
      .sort(sortByName);
  }
);

export const selectHasContacts = createSelector(
  [selectContacts],
  (contacts) => contacts.length > 0
);
