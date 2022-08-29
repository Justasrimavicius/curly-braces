import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstAuthView from './Routes/FirstAuthView';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './Styles/mainStyles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<FirstAuthView />} />
    </Routes>
  </BrowserRouter>
  // </React.Strict Mode>
);

