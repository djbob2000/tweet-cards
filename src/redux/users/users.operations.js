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
      console.log("page=========>>>>", page);
      console.log("data=========>>>>", data);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  "users/updateFollowers",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/users/${user.id}`, user);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const followUser = createAsyncThunk(
//   "users/followUser",
//   async (userId) => {
//     const { data } = await axios.patch(`/users/${userId}`, { followers: "+1" });

//     return data;
//   }
// );

// export const unfollowUser = createAsyncThunk(
//   "users/unfollowUser",
//   async (user) => {
//     const { data } = await axios.patch(`/users/1`, { user });

//     return data;
//   }
// );
