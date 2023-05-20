import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { usersInitState } from "./users.initState";
import { fetchUsers, updateUser } from "./users.operations";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitState,
  reducers: {
    loadMore: (state) => {
      state.page += 1;
    },
    resetUsers: (state) => {
      state.users = [];
      state.page = 1;
    },
    followingUser: (state, { payload }) => {
      state.followingIDs.push(payload);
      // state.users[payload.id].followers += 1;
    },
    unFollowingUser: (state, { payload }) => {
      state.followingIDs = state.followingIDs.filter((id) => id !== payload);
      // state.users[payload.id].followers -= 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (state.page === 1) {
          state.users = payload;
        } else {
          state.users = [
            ...state.users,
            ...payload.filter(
              (user) => !state.users.find((u) => u.id === user.id)
            ),
          ];
        }
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // .addCase(updateUser.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.data.push(payload);
    // })
    // .addCase(updateUser.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});
export const { loadMore, resetUsers, followingUser, unFollowingUser } =
  usersSlice.actions;

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["users", "followingIDs"],
};
export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
