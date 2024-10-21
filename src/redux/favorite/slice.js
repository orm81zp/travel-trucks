import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.items = state.items.filter((id) => id !== payload);
    },
  },
});
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
