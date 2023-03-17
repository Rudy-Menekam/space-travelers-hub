import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    Rocket: rocketReducer,
  },
});
export default store;
