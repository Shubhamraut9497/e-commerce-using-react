import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      console.log(item);
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart = [...state.cart, item];
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((i) => i.id !== id);
    },
  },
});

export const { addItem, deleteItem } = userSlice.actions;

export default userSlice.reducer;
