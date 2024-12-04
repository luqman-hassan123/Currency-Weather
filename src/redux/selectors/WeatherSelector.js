import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentWeather: null,
  forecast: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

// Export actions
export const { setCurrentWeather, setForecast } = weatherSlice.actions;

// Export selector
export const selectCurrentWeather = (state) => state.weather.currentWeather;
export const selectForecast = (state) => state.weather.forecast;

// Export reducer
export default weatherSlice.reducer;
