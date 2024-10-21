import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersCurrent, usersLogin, usersLogout, usersSignup } from "../../api";

export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      return await usersSignup(user);
    } catch (error) {
      if (error.status === 400) {
        if (error.response?.data?.keyPattern) {
          const { email } = error.response.data.keyPattern;
          if (email) {
            return rejectWithValue("The email is already taken");
          }
        }
        return rejectWithValue("User creation error");
      }
      return rejectWithValue("Server error");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      return await usersLogin(user);
    } catch (error) {
      if (error.status === 400) {
        return rejectWithValue("Login error, please check your credentials");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await usersLogout();
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState();

    if (token) {
      try {
        return await usersCurrent(token);
      } catch ({ message }) {
        return rejectWithValue(message);
      }
    } else {
      return rejectWithValue("Token is not available");
    }
  }
);
