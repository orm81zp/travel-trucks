import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogFetch } from "../../api";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await catalogFetch();
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  "catalog/fetchMore",
  async (options = {}, thunkAPI) => {
    try {
      return await catalogFetch(options);
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
