import axios from "axios";
import { CATALOG_LIMIT } from "../const";
import mockData from "./mock.json";

const isTest = import.meta.env.VITE_APP_ENV === "test";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const catalogFetch = async (options = {}) => {
  const params = {
    limit: CATALOG_LIMIT,
    page: 1,
    ...options,
  };
  if (isTest) {
    return mockData;
  }

  const response = await axios.get("/campers", {
    params,
  });
  return response.data;
};

export const detailFetch = async (truckId) => {
  if (isTest) {
    return mockData["items"][0];
  }
  const response = await axios.get(`/campers/${truckId}`);
  return response.data;
};
