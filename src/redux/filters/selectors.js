export const selectFilterLocation = (state) => state.filters.location;
export const selectFilterType = (state) => state.filters.type;
export const selectFilterEquipments = (state) => state.filters.equipments;

// export const selectFilters = createSelector(
//   [selectFilterEquipments, selectFilterLocation, selectFilterType],
//   (equipments, location, form) => {
//     return {
//       form,
//       location,
//       ...getObjectAsQueryParams(equipments),
//     };
//   }
// );
