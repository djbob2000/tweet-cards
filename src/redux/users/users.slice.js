import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { usersInitState } from "./users.initState";
import { fetchUsers, updateUser } from "./users.operations";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data.push(payload);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["users"],
};
export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
