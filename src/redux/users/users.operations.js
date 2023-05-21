import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

import axios from "axios";

axios.defaults.baseURL = "https://6463dcd7043c103502ae140c.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const { page } = thunkAPI.getState().users;
      const { data } = await axios.get("/users", {
        params: {
          page,
          limit: 3,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateFollowers",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.put(`/users/${user.id}`, user);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
