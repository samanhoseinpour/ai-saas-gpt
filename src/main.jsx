import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import App from './App';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <main>
      <App />
    </main>
  </React.StrictMode>
);
