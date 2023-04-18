import { configureStore } from "@reduxjs/toolkit";

//Slice
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
  },
});
