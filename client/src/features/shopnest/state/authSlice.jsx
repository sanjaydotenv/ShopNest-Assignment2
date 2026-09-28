import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  accessToken: null,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "AuthUser",
  initialState,

  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticate = true;
      state.loading = false;
    },

    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticate = true;
      state.loading = false;
    },

    hydrateUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticate = true;
      state.loading = false;
    },

    logoutUser: (state) => {
      state.isAuthenticate = false;
      state.user = null;
      state.accessToken = null;
      state.loading = false;
    },
  },
});

export const {
  registerUser,
  loginUser,
  hydrateUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;