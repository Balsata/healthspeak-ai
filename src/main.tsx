import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import "./utils/i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
