import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:30001/customers'); 
    } catch (error) {
      console.log('Error fetching customers:', error);
    }
  };

  return (
    <div className="table-responsive container">
    <div className="d-flex">
    <h2>Customer list</h2>
    <button className='btn btn-primary ms-auto' onClick={()=>navigate("/add")}>Add Customer</button>
    </div>
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
          <th scope="col">location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col">#</td>
          <td scope="col">Name</td>
          <td scope="col">Number</td>
          <td scope="col">location</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default CustomerList;

