import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rates: {},
  baseCurrency: 'USD',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setRates: (state, action) => {
      state.rates = action.payload;
    },
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
});

// Export actions
export const { setRates, setBaseCurrency } = currencySlice.actions;

// Export selector
export const selectRates = (state) => state.currency.rates;
export const selectBaseCurrency = (state) => state.currency.baseCurrency;

// Export reducer
export default currencySlice.reducer;
