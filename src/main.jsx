import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './App.css';
import App from './App';
import { store } from './services/store';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
