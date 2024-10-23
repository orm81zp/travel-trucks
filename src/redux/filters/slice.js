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
    changeLocation(state, action) {
      state.location = action.payload || "";
    },
    changeType(state, action) {
      state.type = action.payload || "";
    },
    changeEquipments(state, action) {
      state.equipments = action.payload || [];
    },
    setFilters(state, action) {
      const {
        type = "",
        equipments = [],
        location = "",
      } = action.payload || {};
      state.type = type;
      state.location = location;
      state.equipments = equipments;
    },
  },
});

// actions
export const {
  changeLocation,
  changeType,
  changeEquipments,
  toggleEquipments,
  setFilters,
} = filtersSlice.actions;

// reducer
export const filtersReducer = filtersSlice.reducer;
