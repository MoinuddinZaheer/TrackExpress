import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Perform registration logic here
    try {
      const response = await axios.post('/api/register', { name, mobileNumber });
      navigate('/login'); // Navigate to the login route after successful registration
    } catch (error) {
      console.log('Error registering:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    padding: '0.5rem',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

export default Register;
