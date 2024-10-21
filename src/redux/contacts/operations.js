import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  contactDelete,
  contactsAdd,
  contactsFetch,
  contactsUpdate,
} from "../../api";

const isDuplicate = (contacts, newContact) =>
  contacts.find(
    (contact) =>
      (contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number) &&
      contact.id !== newContact.id
  );

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await contactsFetch();
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { rejectWithValue, getState }) => {
    try {
      const {
        contacts: { items },
      } = getState();

      if (isDuplicate(items, newContact)) {
        return rejectWithValue(
          "A contact already exists with the same name or number"
        );
      }

      return await contactsAdd(newContact);
    } catch (error) {
      if (error.status === 400) {
        return rejectWithValue("Error creating contact");
      } else if (error.status === 401) {
        return rejectWithValue("You are not authorized");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      return await contactDelete(contactId);
    } catch (error) {
      if (error.status === 401) {
        return thunkAPI.rejectWithValue("You are not authorized");
      } else if (error.status === 404) {
        return thunkAPI.rejectWithValue("There is no such user in contacts");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, ...updatedContact }, { rejectWithValue, getState }) => {
    try {
      const {
        contacts: { items },
      } = getState();

      if (isDuplicate(items, { id, ...updatedContact })) {
        return rejectWithValue(
          "A contact already exists with the same name or number"
        );
      }
      return await contactsUpdate(id, updatedContact);
    } catch (error) {
      if (error.status === 400) {
        return rejectWithValue("Contact update failed");
      } else if (error.status === 401) {
        return rejectWithValue("You are not authorized");
      }
      return rejectWithValue(error.message);
    }
  }
);
