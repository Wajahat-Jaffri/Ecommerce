import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsReducer from "./admin/product/index";
import shopProductsReducer from "./shop/index";
export const store = configureStore({
    reducer: {
        auth: authReducer,
    adminProducts: adminProductsReducer,
    shopProducts: shopProductsReducer
    }
})