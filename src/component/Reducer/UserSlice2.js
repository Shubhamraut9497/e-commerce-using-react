import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 1,
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});

export const { incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
