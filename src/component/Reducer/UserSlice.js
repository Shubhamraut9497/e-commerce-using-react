import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      console.log(action.payload);
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((i) => i.id !== id);
    },
    IncrementItem: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        // Increase the quantity of the item in the cart
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item && item.quantity > 0) { // Check if the quantity is greater than 0
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, deleteItem, IncrementItem, decrementItem } = userSlice.actions;
export default userSlice.reducer;
