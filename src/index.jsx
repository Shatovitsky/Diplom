import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { Provider } from 'react-redux';

import App from './components/App/index';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
