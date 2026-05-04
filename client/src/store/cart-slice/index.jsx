// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const API_BASE_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const initialState = {
//   cartItems: { items: [] },
//   isLoading: false,
// };

// //  ADD TO CART
// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ userId, productId, quantity }) => {
//     await axios.post(`${API_BASE_URL}/api/shop/cart/add`, {
//       userId,
//       productId,
//       quantity,
//     });

//     // fresh cart fetch
//     const res = await axios.get(
//       `${API_BASE_URL}/api/shop/cart/get/${userId}`
//     );

//     return res.data;
//   }
// );

// //  FETCH CART
// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async (userId) => {
//     const res = await axios.get(
//       `${API_BASE_URL}/api/shop/cart/get/${userId}`
//     );
//     return res.data;
//   }
// );

// //  UPDATE QUANTITY
// export const updateCartQuantity = createAsyncThunk(
//   "cart/updateCartQuantity",
//   async ({ userId, productId, quantity }) => {
//     const res = await axios.put(
//       `${API_BASE_URL}/api/shop/cart/update`,
//       {
//         userId,
//         productId,
//         quantity,
//       }
//     );

//     return res.data;
//   }
// );

// //  DELETE ITEM
// export const deleteCartItem = createAsyncThunk(
//   "cart/deleteCartItem",
//   async ({ userId, productId }) => {
//     const res = await axios.delete(
//       `${API_BASE_URL}/api/shop/cart/remove`,
//       {
//         data: { userId, productId },
//       }
//     );

//     return {
//       success: res.data.success,
//       data: {
//         items: res.data.data || [],
//       },
//     };
//   }
// );

// //  SLICE
// const shoppingCartSlice = createSlice({
//   name: "shoppingCart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       // ADD
//       .addCase(addToCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cartItems = action.payload.data;
//       })
//       .addCase(addToCart.rejected, (state) => {
//         state.isLoading = false;
//       })

//       // FETCH
//       .addCase(fetchCartItems.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cartItems = action.payload.data;
//       })
//       .addCase(fetchCartItems.rejected, (state) => {
//         state.isLoading = false;
//         state.cartItems = { items: [] };
//       })

//       // UPDATE
//       .addCase(updateCartQuantity.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateCartQuantity.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cartItems = action.payload.data;
//       })
//       .addCase(updateCartQuantity.rejected, (state) => {
//         state.isLoading = false;
//       })

//       // DELETE
//       .addCase(deleteCartItem.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteCartItem.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cartItems = action.payload.data;
//       })
//       .addCase(deleteCartItem.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });

// export default shoppingCartSlice.reducer;



import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialState = {
  cartItems: [], // Isay direct array rakhein simplify karne ke liye
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(`${API_BASE_URL}/api/shop/cart/add`, {
      userId,
      productId,
      quantity,
    });
    return response.data;
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
    const res = await axios.get(`${API_BASE_URL}/api/shop/cart/get/${userId}`);
    return res.data;
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, productId, quantity }) => {
    const res = await axios.put(`${API_BASE_URL}/api/shop/cart/update`, {
      userId,
      productId,
      quantity,
    });
    return res.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, productId }) => {
    const res = await axios.delete(`${API_BASE_URL}/api/shop/cart/remove`, {
      data: { userId, productId },
    });
    return res.data;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data; // Backend response check karein
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => { state.isLoading = true; }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => { state.isLoading = false; }
      );
  },
});

export default shoppingCartSlice.reducer;