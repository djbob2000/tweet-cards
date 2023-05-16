import { usersInitState } from "./users/users.initState";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/users.slice";

export const store = configureStore({
  preloadedState: usersInitState,
  devTools: true,

  reducer: {
    users: usersReducer,
  },
});
