import React, { useState } from 'react';

const RegisterCustomer = ({ onRegister }) => {
  const [newCustomer, setNewCustomer] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(newCustomer);
    setNewCustomer({
      id: '',
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div>
      <h2>Register New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={newCustomer.id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={newCustomer.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;