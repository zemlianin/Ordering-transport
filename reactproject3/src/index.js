import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Screens/App';
import Customer from './Screens/Customer';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customer" element={<Customer />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
