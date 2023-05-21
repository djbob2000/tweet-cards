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
    },
    unFollowingUser: (state, { payload }) => {
      state.followingIDs = state.followingIDs.filter((id) => id !== payload);
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
      })

      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
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
