import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";
import { CATALOG_LIMIT } from "../../const";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    total: 0,
    limit: CATALOG_LIMIT,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { items, total } = action.payload;
        state.items = items;
        state.total = total;
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
