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
      const { type = "", equipments = [] } = action.payload || {};
      state.type = type;
      state.equipments = equipments;
    },
  },
});

// actions
export const { changeLocation, changeType, changeEquipments, setFilters} =
  filtersSlice.actions;

// reducer
export const filtersReducer = filtersSlice.reducer;
