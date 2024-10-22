import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchMore } from "./operations";
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
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(fetchMore.pending, handlePending)
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { items, total } = action.payload;
        state.items.push(...items);
        state.total = total;
      })
      .addCase(fetchMore.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
