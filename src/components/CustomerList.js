import React from 'react';

const CustomerList = ({ customers, onSelectCustomer, handleDeleteCustomer }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <h5>Click on user to view details</h5>
      <ul>
        {customers.map(customer => (
          <li key={customer.id} onClick={() => onSelectCustomer(customer)}>
            {customer.name}{' '}
            <button onClick={() => handleDeleteCustomer(customer.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;