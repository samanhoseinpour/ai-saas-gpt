import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Navbar, Footer } from './components';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
