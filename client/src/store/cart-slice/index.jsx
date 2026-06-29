import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://ecommerce-kappa-umber-40.vercel.app";

const initialState = {
  cartItems: [],
  isLoading: false,
};

// FETCH CART
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
    const res = await axios.get(
      `${API_BASE_URL}/api/shop/cart/get/${userId}`
    );
    return res.data;
  }
);

// ADD TO CART
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId, quantity }) => {
    const res = await axios.post(
      `${API_BASE_URL}/api/shop/cart/add`,
      { userId, productId, quantity }
    );
    return res.data;
  }
);

//  UPDATE QUANTITY
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, productId, quantity }) => {
    const res = await axios.put(
      `${API_BASE_URL}/api/shop/cart/update`,
      { userId, productId, quantity }
    );
    return res.data;
  }
);

// DELETE ITEM
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, productId }) => {
    const res = await axios.delete(
      `${API_BASE_URL}/api/shop/cart/remove`,
      { data: { userId, productId } }
    );
    return res.data;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //  FETCH (MAIN SOURCE OF TRUTH)
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data?.items || [];
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
      })

      //  ADD → state directly update mat karo
      .addCase(addToCart.fulfilled, (state) => {
        state.isLoading = false;
      })

      //  UPDATE
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      })

      //  DELETE
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload?.data || [];
      });
  },
});

export default shoppingCartSlice.reducer;