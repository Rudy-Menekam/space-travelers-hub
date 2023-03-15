import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    Rocket: rocketReducer,
  },
});
export default store;
