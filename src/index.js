import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Render react in root div from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
