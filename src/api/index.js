import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const setAuthHeader = (token) => {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers["Authorization"] = "";
};

export const usersSignup = async (user) => {
  const { data } = await axios.post("/users/signup", user);
  setAuthHeader(data.token);
  return data;
};

export const usersLogin = async (user) => {
  const { data } = await axios.post("/users/login", user);
  setAuthHeader(data.token);
  return data;
};

export const usersLogout = async (user) => {
  await axios.post("/users/logout", user);
  clearAuthHeader();
};

export const usersCurrent = async (token) => {
  setAuthHeader(token);
  const { data } = await axios.get("/users/current");
  return data;
};

export const contactsFetch = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const contactsAdd = async (newContact) => {
  const response = await axios.post("/contacts", newContact);
  return response.data;
};

export const contactDelete = async (contactId) => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};

export const contactsUpdate = async (contactId, updatedContact) => {
  const response = await axios.patch(`/contacts/${contactId}`, updatedContact);
  return response.data;
};
