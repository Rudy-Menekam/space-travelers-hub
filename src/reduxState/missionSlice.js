/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Get missions from API
export const getMission = createAsyncThunk('mission/getMission', async () => {
  const result = await axios('https://api.spacexdata.com/v3/missions');
  result.data.forEach((object) => {
    object.reserved = false;
  });
  return result.data;
});

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
  reserved: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIndex = state.missions.findIndex(
        (mission) => mission.mission_id === action.payload,
      );
      if (missionIndex !== -1) {
        const mission = state.missions[missionIndex];
        mission.reserved = !mission.reserved;
      }
    },
    myReservedMissions: (state) => {
      const missions = state.missions.filter(
        (mission) => mission.reserved === true,
      );
      return { ...state, reserved: missions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMission.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.status = 'succeded';
      })
      .addCase(getMission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { joinMission, myReservedMissions } = missionSlice.actions;
export const allMissions = (state) => state.missions.missions;
export const missionsStatus = (state) => state.missions.status;
export const missionsError = (state) => state.missions.error;
export default missionSlice.reducer;
