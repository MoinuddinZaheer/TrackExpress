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
      console.log("login successfully");
      navigate('/dashboard'); // Navigate to the dashboard route
    } else {
      // OTP verification failed, display error message or take appropriate action
      console.log('Invalid OTP');
    }
  };

  return (    
  <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
    <form onSubmit={handleLogin}>
    <h1 className="h3 mb-3 fw-normal">Sign in as Driver</h1>

    <div className="form-floating mb-2">
      <input type="Number" maxLength="10" value={mobileNumber} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e)=>setMobileNumber(e.target.value)}/>
      <label forHtml="floatingInput">Phone Number</label>
    </div>
    <div className="form-floating mb-2">
      <input type="Number" value={otp} className="form-control" id="floatingInput" placeholder="Valid OTP" onChange={(e)=>setOTP(e.target.value)}/>
      <label forHtml="floatingInput">OTP</label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  </div>);
};

// Inline CSS styles...

export default Login;
