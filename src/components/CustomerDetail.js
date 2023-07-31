import React from 'react';

const CustomerDetail = ({ customer }) => {
  if (!customer) return null;

  return (
    <div>
      <h2>Customer Detail</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <p>ID: {customer.id}</p>
    </div>
  );
};

export default CustomerDetail;