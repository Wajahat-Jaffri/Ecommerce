import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk("cart/addToCart", async ({ userId, productId, quantity }) => {
  const response = await axios.post(`${API_BASE_URL}/api/shop/cart/add`, { userId, productId, quantity });
  return response.data;
});

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async (userId) => {
  const res = await axios.get(`${API_BASE_URL}/api/shop/cart/get/${userId}`);
  return res.data;
});

export const updateCartQuantity = createAsyncThunk("cart/updateCartQuantity", async ({ userId, productId, quantity }) => {
  const res = await axios.put(`${API_BASE_URL}/api/shop/cart/update`, { userId, productId, quantity });
  return res.data;
});

export const deleteCartItem = createAsyncThunk("cart/deleteCartItem", async ({ userId, productId }) => {
  const res = await axios.delete(`${API_BASE_URL}/api/shop/cart/remove`, { data: { userId, productId } });
  return res.data;
});

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data?.items || [];
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data?.items || [];
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data?.items || [];
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data?.items || [];
      });
  },
});

export default shoppingCartSlice.reducer;