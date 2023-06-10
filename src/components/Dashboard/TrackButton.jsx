// src/components/Dashboard/TrackButton.js
import React from 'react';

const TrackButton = ({ isTracking, startTracking, stopTracking }) => {
  return (
    <div>
      {isTracking ? (
        <button onClick={stopTracking}>Stop Tracking</button>
      ) : (
        <button onClick={startTracking}>Start Tracking</button>
      )}
    </div>
  );
};

export default TrackButton;
