import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  sliderList: [],
};

// API CALL
export const fetchSliders = createAsyncThunk(
  "slider/fetchSliders",
  async () => {
    const res = await axios.get("http://localhost:5000/api/slider");
    return res.data;
  }
);

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.isLoading = false;

        // safe handling (important)
        state.sliderList = action.payload.data || action.payload;
      })
      .addCase(fetchSliders.rejected, (state) => {
        state.isLoading = false;
        state.sliderList = [];
      });
  },
});

export default sliderSlice.reducer;