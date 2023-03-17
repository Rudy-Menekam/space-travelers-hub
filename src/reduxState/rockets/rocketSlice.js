import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRocket = createAsyncThunk('Rocket/fetchRocket', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  rocketList: [],
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, payload) => ({
      ...state,
      rocketList: state.rocketList.map((rocket) => {
        if (rocket.id === payload.payload) {
          if (rocket.reserved === true) {
            return { ...rocket, reserved: false };
          }
          return { ...rocket, reserved: true };
        }
        return rocket;
      }),
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRocket.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRocket.fulfilled, (state, action) => ({
        ...state,
        rocketList: action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
        })),
        status: 'succeded',
      }))
      .addCase(fetchRocket.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
