import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index.jsx";       
import adminProductsReducer from "./admin/product/index.jsx"; 
import shopProductsReducer from "./shop/index.jsx";       
import sliderReducer from "./slider-slice/index.jsx";   
import cartReducer from "./cart-slice/index.jsx";       
import orderReducer from "./order-slice/index.jsx";     

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