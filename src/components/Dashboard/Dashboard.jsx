import React, { useState } from 'react';
import Map from './Map';
import TrackButton from './TrackButton';
import CustomerList from './CustomerList';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isTracking, setIsTracking] = useState(false);
  const navigate=useNavigate()

  return (
    <div className='container' style={{marginBottom:"10px"}}>
      <h2>Dashboard</h2>
      <button className="btn btn-primary" style={{marginBottom:"5px"}} onClick={()=>navigate("/list")}>Customer List</button>
      <div className="div">
      </div>
    </div>
  );
};

export default Dashboard;
