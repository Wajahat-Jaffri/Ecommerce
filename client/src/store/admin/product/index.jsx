


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
  loading: false,
};

// Add new product
export const addNewProduct = createAsyncThunk(
  "adminProducts/addNewProduct",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/add",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  }
);

// Fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/admin/products/get");
    console.log("api data")
    console.log(response.data);
    return response.data;
  }
);

// Edit product
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, formData }) => {
    const response = await axios.put(
      `http://localhost:5000/api/admin/products/edit/${id}`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.post(
      `http://localhost:5000/api/admin/products/delete/${id}`
    );
    return response.data;
  }
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add product
      .addCase(addNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload.data || [];
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.loading = false;
      })

      // Fetch products
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload.data || [];
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.productList = [];
      })

      // Edit product
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.productList.findIndex(
          (p) => p._id === action.payload._id
        );
        if (index !== -1) state.productList[index] = action.payload;
      })
      .addCase(editProduct.rejected, (state) => {
        state.loading = false;
      })

      // Delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(
          (p) => p._id !== action.meta.arg
        );
      });
  },
});

export default adminProductSlice.reducer;