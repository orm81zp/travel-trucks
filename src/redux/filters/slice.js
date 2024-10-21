import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.search = action.payload;
    },
  },
});

// actions
export const { changeFilter } = filtersSlice.actions;

// reducer
export const filtersReducer = filtersSlice.reducer;
