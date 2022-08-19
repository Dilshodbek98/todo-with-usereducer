import React from 'react';
import ReactDOM from 'react-dom/client';
import { Context } from './ccontext';
import './index.css';
import { Main } from './main';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context>
      <Main/>
    </Context>
  </React.StrictMode>
);
