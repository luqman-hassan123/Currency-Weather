import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    weather: weatherReducer,
  },
});

export default store;
