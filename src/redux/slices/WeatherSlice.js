import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch weather data
export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const API_KEY = '5e8d32f2e85fe4350115b1352459a464';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle', //track API call status: idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';    // Set status to succeeded on success
        state.data = action.payload;   // Update state with the fetched weather data
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed';                  // Set status to failed on error
        state.error = action.error.message;     // Capture the error message
      });
  },
});

export const selectWeather = (state) => state.weather.data;
export default weatherSlice.reducer;
