import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDragons = createAsyncThunk(
  "dragons/fetchDragons",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v4/dragons");
    return response.data;
  }
);
