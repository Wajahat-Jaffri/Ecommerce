import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsReducer from "./admin/product";
import shopProductsReducer from "./shop";
import sliderReducer from "./slider-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsReducer,
    shopProducts: shopProductsReducer,
    slider: sliderReducer,
  },
});