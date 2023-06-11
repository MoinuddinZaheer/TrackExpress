import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigate = useNavigate();

  const customerList = JSON.parse(localStorage.getItem('customer'));

  const handleOpenMap = (location) => {
    setSelectedLocation(location);
  };

  const list = customerList
    ? customerList.map((cust, ind) => (
      <tr key={ind}>
        <td scope="col">{ind + 1}</td>
        <td scope="col">{cust.name}</td>
        <td scope="col">{cust.phone}</td>
        <td scope="col">{cust.location.lat}-{cust.location.lng}</td>
        <td scope="col">
          <button className='btn btn-primary' onClick={() => handleOpenMap(cust.location)}>Open Map</button>
        </td>
      </tr>
    ))
    : null;

  return (
    <div className="table-responsive container">
      <div className='my-3'>
        {Object.keys(selectedLocation).length !== 0 && (
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498018.09658709046!2d${selectedLocation.lat}!3d${selectedLocation.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150bb1cba01b%3A0xe1927d2d346c93dd!2sMinar%20Masjid!5e0!3m2!1sen!2sin!4v1686504690978!5m2!1sen!2sin`}
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
      <div className="d-flex" style={{ marginBottom: "5px" }}>
        <h2>Customer list</h2>
        <button className='btn btn-dark ms-auto' onClick={() => navigate("/dashboard")}>Back To Live Tracking</button>
        <button className='btn btn-primary ms-auto' onClick={() => navigate("/add")}>Add Customer</button>
      </div>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <td scope="col">#</td>
            <td scope="col">Name</td>
            <td scope="col">Number</td>
            <td scope="col">location</td>
            <td scope="col">Action</td>
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
