import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './index.18n.tsx';
import App from './features/app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
