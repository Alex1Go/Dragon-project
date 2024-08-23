import { createSlice } from '@reduxjs/toolkit';
import { fetchDragons } from './operation';

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchDragons.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default dragonsSlice.reducer;
