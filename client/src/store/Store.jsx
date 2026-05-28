import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsReducer from "./admin/product";
import shopProductsReducer from "./shop";
import sliderReducer from "./slider-slice";
import cartReducer from "./cart-slice";
import orderReducer from "./order-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsReducer,
    shopProducts: shopProductsReducer,
    slider: sliderReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});