import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ filtersParams = {}, sortParams = "price-lowtohigh" }) => {
    const query = new URLSearchParams({
      ...filtersParams,
      sortBy: sortParams,
    });
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/filter?${query.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return result.data;
  },
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/details/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return result.data;
  },
);


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload.data;
        });
        builder.addCase(fetchAllFilteredProducts.rejected, (state) => {
            state.isLoading = false;
            state.productList = [];
        });
       builder .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      builder.addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = [];
      })
    },
});

export default productSlice.reducer;