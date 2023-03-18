import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Reducer/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;