import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetail from './components/CustomerDetail';
import RegisterCustomer from './components/RegisterCustomer';
import axios from 'axios';
import './App.css';

const baseURL = "http://localhost:3000"

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleDeleteCustomer = (customerId) => {
    axios.delete(`${baseURL}/api/customers/${customerId}`)
      .then(response => {
        setSelectedCustomer(null);
        fetchCustomers();
      })
      .catch(error => console.log(error));
  };

  const handleRegisterCustomer = (newCustomer) => {
    axios.post(`${baseURL}/api/customers`, newCustomer)
      .then(response => {
        fetchCustomers();
      })
      .catch(error => console.log(error));
  };

  const fetchCustomers = () => {
    axios.get(`${baseURL}/api/customers`)
      .then(response => setCustomers(response.data))
      .catch(error => console.log(error));
  };

  return (
    <body>
      <div>
        <h1>Customer Management App</h1>
        <div className="customer-management-container">
          <div className="customer-list-container">
            <CustomerList customers={customers} onSelectCustomer={handleSelectCustomer} handleDeleteCustomer={handleDeleteCustomer} />
          </div>
          <div className="customer-details-container">
            <CustomerDetail customer={selectedCustomer} />
          </div>
          <div className="register-customer-container">
            <RegisterCustomer onRegister={handleRegisterCustomer} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;