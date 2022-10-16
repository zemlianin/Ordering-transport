import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Screens/App';
import Customer from './Screens/Customer_new_req';
import CustomerList from './Screens/Customer_list_req';
import Dispatcher from './Screens/Dispatcher';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="customer" element={<Customer />} />
        <Route path="customer-list" element={<CustomerList />} />
        <Route path="dispatcher" element={<Dispatcher />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
