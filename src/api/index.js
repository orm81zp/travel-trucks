import axios from "axios";
import { CATALOG_LIMIT } from "../const";
import mockData from "./mock.json";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const catalogFetch = async (
  options = { limit: CATALOG_LIMIT, page: 1 }
) => {
  return mockData;
  // const response = await axios.get("/campers", {
  //   params: { ...options },
  // });
  // return response.data;
};

export const truckFetch = async (truckId) => {
  const response = await axios.get(`/campers/${truckId}`);
  return response.data;
};
