import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/WeatherSlice';
import currencyReducer from './slices/CurrencySlice';


const store = configureStore({
  reducer: {
    currency: currencyReducer,
    weather: weatherReducer,
  },
});

export default store;
