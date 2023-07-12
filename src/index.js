import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';

import './style/style.scss';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

