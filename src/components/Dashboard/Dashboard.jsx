import React, { useState } from 'react';
import Map from './Map';
import TrackButton from './TrackButton';
import CustomerList from './CustomerList';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isTracking, setIsTracking] = useState(false);
  const navigate=useNavigate()

  const handleTrackButtonClick = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className='container'>
      <h2>Dashboard</h2>
      <div className="div">
        {/* <Map/> */}
        <div className="d-flex justify-content-evenly">
          <div>
          <button className="btn btn-secondary me-2">Start Tracking</button>
          <button className="btn btn-info">Stop Tracking</button>
          </div>
          <button className="btn btn-primary" onClick={()=>navigate("/list")}>Customer List</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
