import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigate = useNavigate();

  const customerList = JSON.parse(localStorage.getItem('customer'));

  const handleOpenMap = (location) => {
    setSelectedLocation(location);
  };


  const list =
    customerList &&
    customerList.map((cust, ind) => (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>{cust.name}</td>
        <td>{cust.phone}</td>
        <td>
          {cust.location ? `${cust.location.lat}-${cust.location.lng}` : ''}
        </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => handleOpenMap(cust.location)}
          >
            Open Map
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="table-responsive container">
      <div className="my-3">
        {Object.keys(selectedLocation).length !== 0 && (
          <iframe
            title="Google Maps"
            src={`https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=15&output=embed`}
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}

      </div>
      <div className="d-flex" style={{ marginBottom: '5px' }}>
        <h2>Customer list</h2>
        <button
          className="btn btn-dark ms-auto"
          onClick={() => navigate('/dashboard')}
        >
          Back To Live Tracking
        </button>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => navigate('/add')}
        >
          Add Customer
        </button>
      </div>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Number</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerList && customerList.length > 0 ? (
            list
          ) : (
            <tr>
              <td colSpan="5">No customers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
