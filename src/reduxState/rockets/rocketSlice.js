import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import React, { useState } from 'react';

const url = 'https://api.spacexdata.com/v4/rockets';
// const [setData] = useState([]);
export const fetchRocket = createAsyncThunk('Rocket/fetchRocket', async () => {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (err) {
    return console.log(err);
  }
});

const initialState = {
  rocket: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: {

    [fetchRocket.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRocket.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.rockets = action.payload;
    },
    [fetchRocket.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketSlice.reducer;
