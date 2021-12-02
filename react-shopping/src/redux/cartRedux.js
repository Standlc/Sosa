import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "bag",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    initialize: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, initialize } = cartSlice.actions;
export default cartSlice.reducer;
