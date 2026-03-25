import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    
};

export const fetchAllFilteredProducts = createAsyncThunk("products/fetchAllProducts/filter",
     async () => {
    const response = await axios.get("http://localhost:5000/api/shop/products/filter",{
        headers: { "Content-Type": "application/json" },
        
    });
    console.log(response.data);
    return response.data;
});

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
    },
});

export default productSlice.reducer;