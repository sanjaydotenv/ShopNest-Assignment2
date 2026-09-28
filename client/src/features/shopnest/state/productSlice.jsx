import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: null,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    allProductsData: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { allProductsData } = productSlice.actions;

export default productSlice.reducer;
