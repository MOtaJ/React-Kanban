import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createDevTools } from 'redux-devtools';
import ReduxThunk from 'redux-thunk';
import cards from './reducers/index.js';

let store = createStore(cards,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
