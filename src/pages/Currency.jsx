import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCurrencyRates,
  selectRates,
  selectBaseCurrency,
  setBaseCurrency,
} from '../redux/slices/CurrencySlice';

const Currency = () => {
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();

  const [toCurrency, setToCurrency] = useState('EUR'); // Default "To" currency
  const [amount, setAmount] = useState(1); // Default amount
  const [result, setResult] = useState(''); // Conversion result
  const [error, setError] = useState(''); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  // Your API Key
  const apiKey = '6e772b3429a9f4ca0c6cb5eb';

  // Available currencies for dropdown
  const currencies = [
     'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY', 'INR', 'CHF', 'CNY', 'MXN', 'BRL', 'ZAR', 'RUB',
    'AED', 'AFN', 'BDT', 'CNY', 'INR', 'IDR', 'JPY', 'KRW', 
    'LKR', 'MYR', 'PKR', 'SGD', 'THB', 'VND',
  ];

  // Fetch currency rates
  useEffect(() => {
    setLoading(true);
    console.log(baseCurrency);
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`)
    .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCurrencyRates(data.rates)); // Update Redux store with fetched rates
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch rates');
        setLoading(false);
      });
  }, [baseCurrency, dispatch]);

  const handleConvert = () => {
    if (rates[toCurrency]) {
      const convertedAmount = (amount * rates[toCurrency]).toFixed(2);
      setResult(`${amount} ${baseCurrency} = ${convertedAmount} ${toCurrency}`);
    } else {
      setResult('Conversion not available');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Currency Converter</h1>
      
      {/* Conversion Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="fromCurrency" className="form-label">From:</label>
            <select
              id="fromCurrency"
              value={baseCurrency}
              onChange={(e) => dispatch(setBaseCurrency(e.target.value))}
              className="form-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="toCurrency" className="form-label">To:</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="form-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              placeholder="Enter amount to convert"
            />
          </div>

          <div className="d-grid">
            <button
              onClick={handleConvert}
              className="btn btn-primary"
            >
              Convert
            </button>
          </div>
        </div>
      </div>

      {/* Conversion Result */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {result && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-center">
            <h5 className="alert alert-info">{result}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
