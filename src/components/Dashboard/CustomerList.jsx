// // src/components/Dashboard/CustomerList.js
// import React from 'react';

// const CustomerList = ({ customers }) => {
//   return (
//     <div>
//       <h3>Customer List</h3>
//       <ul>
//         {customers.map((customer) => (
//           <li key={customer.id}>{customer.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:30001/customers'); // Replace 'your-api-endpoint' with the actual endpoint URL
      setCustomers(response.data);
    } catch (error) {
      console.log('Error fetching customers:', error);
    }
  };

  return (
    <div>
      <h3>Customer List</h3>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

