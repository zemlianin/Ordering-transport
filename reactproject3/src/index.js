import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Screens/App';
import Customer from './Screens/Customer_new_req';
import CustomerList from './Screens/Customer_list_req';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customer" element={<Customer />} />
      <Route path="customer-list" element={<CustomerList />} />
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
