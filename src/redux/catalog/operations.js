import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogFetch } from "../../api";

export const fetchCatalog = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await catalogFetch();
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
