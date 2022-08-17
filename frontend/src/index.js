import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { IndexView } from './views/IndexView';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/scss/IndexView.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //TODO: Configurar o React Router DOM
  <html>
    <IndexView/>
  </html>
);

reportWebVitals();
