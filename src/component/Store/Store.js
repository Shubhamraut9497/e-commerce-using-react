import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Reducer/UserSlice";
import cartReducer from '../Reducer/UserSlice2'
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;