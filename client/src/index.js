
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDom.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

console.log("TEST: ", process.env.REACT_APP_STRIPE_KEY);
console.log("TEST2: ", process.env.NODE_ENV);

