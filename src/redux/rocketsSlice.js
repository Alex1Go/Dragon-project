import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v4/dragons");
    return response.data;
  }
);

const rocketsSlice = createSlice({
  name: "rockets",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default rocketsSlice.reducer;
