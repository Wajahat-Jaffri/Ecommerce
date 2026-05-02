import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  sliderList: [],
};

const API = "http://localhost:5000/api/slider";

export const fetchSliders = createAsyncThunk("slider/fetchSliders", async () => {
  const res = await axios.get(`${API}/get`);
  return res.data;
});

export const addNewSlider = createAsyncThunk("slider/addNewSlider", async (formData) => {
  const res = await axios.post(`${API}/add`, formData);
  return res.data;
});

export const updateSlider = createAsyncThunk("slider/updateSlider", async ({ id, formData }) => {
  const res = await axios.put(`${API}/update/${id}`, formData);
  return res.data;
});

export const deleteSlider = createAsyncThunk("slider/deleteSlider", async (id) => {
  await axios.delete(`${API}/delete/${id}`);
  return id;
});

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => { state.isLoading = true; })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sliderList = action.payload.data;
      })
      .addCase(addNewSlider.fulfilled, (state, action) => {
        state.sliderList.push(action.payload.data);
      })
      .addCase(updateSlider.fulfilled, (state, action) => {
        const index = state.sliderList.findIndex((item) => item._id === action.payload.data._id);
        if (index !== -1) {
          state.sliderList[index] = action.payload.data;
        }
      })
      .addCase(deleteSlider.fulfilled, (state, action) => {
        state.sliderList = state.sliderList.filter((item) => item._id !== action.payload);
      });
  },
});

export default sliderSlice.reducer;