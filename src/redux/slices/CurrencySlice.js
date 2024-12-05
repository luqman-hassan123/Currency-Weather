import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch currency rates
export const fetchCurrencyRates = createAsyncThunk(
  'currency/fetchRates',
  async (baseCurrency = 'USD') => {
    const apiKey = '6e772b3429a9f4ca0c6cb5eb'; // API key
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch currency rates');
    }

    const data = await response.json();
    return data;
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    rates: {}, // To store the fetched rates
    baseCurrency: 'USD', // Default base currency
    status: 'idle', // idle | loading | succeeded | failed
    error: null, // To store any error messages
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload; // Update the base currency
    },
  },

  // Handles additional cases, particularly the lifecycle of
  //  fetchCurrencyRates (pending, fulfilled, rejected).
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rates = action.payload.conversion_rates; // Use correct data key
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const selectRates = (state) => state.currency.rates;
export const selectBaseCurrency = (state) => state.currency.baseCurrency;
export const selectStatus = (state) => state.currency.status;
export const selectError = (state) => state.currency.error;

export default currencySlice.reducer;
