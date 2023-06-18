import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sunday-work-6-7---2">
    {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
