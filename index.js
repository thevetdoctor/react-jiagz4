import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// store.getState();
// console.log(store); 

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
