import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/Index.jsx";       // 👈 Capital 'I' (jaisa image mein hai)
import adminProductsReducer from "./admin/product/index.jsx"; // 👈 Small 'i'
import shopProductsReducer from "./shop/index.jsx";       // 👈 Small 'i'
import sliderReducer from "./slider-slice/index.jsx";   // 👈 Small 'i' (image ke mutabiq)
import cartReducer from "./cart-slice/index.jsx";       // 👈 Small 'i'
import orderReducer from "./order-slice/index.jsx";     // 👈 Small 'i'

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