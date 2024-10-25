import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  equipments: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLocation(state, { payload }) {
      state.location = payload || "";
    },
    changeType(state, { payload }) {
      state.type = payload || "";
    },
    changeEquipments(state, { payload }) {
      state.equipments = payload || [];
    },
    setFilters(state, { payload }) {
      const { type = "", equipments = [], location = "" } = payload || {};
      state.type = type;
      state.location = location;
      state.equipments = equipments;
    },
  },
});

export const {
  changeLocation,
  changeType,
  changeEquipments,
  toggleEquipments,
  setFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
