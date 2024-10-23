import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogFetch } from "../../api";
import { getObjectAsQueryParams } from "../../utils/format";
import { CATALOG_LIMIT } from "../../const";

const prepareFilterParams = (state) => {
  const { filters, catalog } = state;
  const { type: form, location, equipments } = filters;
  const { page } = catalog;

  return {
    limit: CATALOG_LIMIT,
    page,
    form,
    location,
    ...getObjectAsQueryParams(equipments),
  };
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (options = {}, { getState, rejectWithValue }) => {
    try {
      return await catalogFetch({
        ...prepareFilterParams(getState()),
        ...options,
      });
    } catch ({ message, status }) {
      if (status === 404) {
        return rejectWithValue("No data to display.");
      }
      return rejectWithValue(message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  "catalog/fetchMore",
  async (options = {}, { getState, rejectWithValue }) => {
    try {
      return await catalogFetch({
        ...prepareFilterParams(getState()),
        ...options,
      });
    } catch ({ message, status }) {
      if (status === 404) {
        return rejectWithValue("No data to display.");
      }
      return rejectWithValue(message);
    }
  }
);
