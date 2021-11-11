import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';

// REDUX
import { Provider } from 'react-redux'
import store from '@Redux/store'

import './index.css';

// SET AXIOS GLOBAL DEFAULTS
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
