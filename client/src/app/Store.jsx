import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features/shopnest/state/authSlice.jsx";
import productReducers from "../features/shopnest/state/productSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    product: productReducers,
  },
});
