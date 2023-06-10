import React, { useState } from 'react';
import Map from './Map';
import TrackButton from './TrackButton';
import CustomerList from './CustomerList';

const Dashboard = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackButtonClick = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div style={containerStyle}>
      <h2>Dashboard</h2>
      <Map />
      <TrackButton isTracking={isTracking} onClick={handleTrackButtonClick} />
      <CustomerList />
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

export default Dashboard;
