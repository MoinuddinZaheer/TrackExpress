import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerManage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const navigate = useNavigate();

  const [customers, setCustomers] = useState(JSON.parse(localStorage.getItem('customer')) || []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && phone && location.lat && location.lng) {
      const customer = { name: name, phone: phone, location: location };
      setCustomers([...customers, customer]);
      localStorage.setItem('customer', JSON.stringify([...customers, customer]));
      alert('Customer added successfully');
    }
  };
  const handleClearForm = () => {
    setName('');
    setPhone('');
    setLocation({ lat: '', lng: '' });
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h1 className="h3 mb-3 fw-normal">Add the Customer</h1>

        <div className="form-floating mb-2">
          <input type="text" value={name} className="form-control" id="floatingInput" placeholder="Enter Customer Name" onChange={(e) => setName(e.target.value)} />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-2">
          <input type="Number" maxLength="10" value={phone} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="floatingInput">Phone Number</label>
        </div>
        <div className="form-floating mb-2">
          <input maxLength="40" value={location.lat} className="form-control" id="floatingInput" placeholder="latitude" onChange={(e) => setLocation({ ...location, lat: e.target.value })} />
          <label htmlFor="floatingInput">lattitude</label>
        </div>
        <div className="form-floating mb-2">
          <input maxLength="40" value={location.lng} className="form-control" id="floatingInput" placeholder="Longitude" onChange={(e) => setLocation({ ...location, lng: e.target.value })} />
          <label htmlFor="floatingInput">longitude</label>
        </div>
        <button className="btn btn-success w-100 py-2" type="submit">Add Customer</button>
        <button className="btn btn-secondary w-100 py-2 mt-2" type="button" onClick={handleClearForm}>Clear Form</button>

      </form>
      <button style={{ marginTop: "10px" }} className='btn btn-primary ms-auto' onClick={() => navigate("/list")}>Go Back To List</button>
    </div>
  );
};

export default CustomerManage;
