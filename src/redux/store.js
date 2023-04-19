import { configureStore } from "@reduxjs/toolkit";

//Slice
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import productDetailSlice from "./productDetailSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    productDetail: productDetailSlice,
    carts: cartSlice,
  },
});
