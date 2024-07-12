import { createSlice } from "@reduxjs/toolkit";

const initialState: object[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    getCartData: (state) => {
      return state;
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const {
  addToCart,
  getCartData,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
