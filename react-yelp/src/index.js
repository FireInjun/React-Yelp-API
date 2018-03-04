import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import './index.css';
import App from './App';

const store = createStore(
  rootReducer,
  // Apply to store
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
