import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform OTP verification here
    const testOTP = '123456'; // Replace with your OTP verification logic
    if (otp === testOTP) {
      // OTP verification successful, navigate to the dashboard
      try {
        const response = await axios.post('/api/login', { mobileNumber });
        navigate('/dashboard'); // Navigate to the dashboard route
      } catch (error) {
        console.log('Error logging in:', error);
      }
    } else {
      // OTP verification failed, display error message or take appropriate action
      console.log('Invalid OTP');
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

  const onRegister = () => {
    navigate('/register');
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
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
        <label style={labelStyle}>
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <button onClick={onRegister} style={buttonStyle}>Register</button>
    </div>
  );
};

export default Login;
