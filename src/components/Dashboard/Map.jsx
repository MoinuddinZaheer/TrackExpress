import React, { useState, useEffect } from 'react';
import './Map.css'
const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  useEffect(() => {
    if (trackingEnabled) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [trackingEnabled]);

  const handleStartTracking = () => {
    setTrackingEnabled(true);
  };

  const handleStopTracking = () => {
    setTrackingEnabled(false);
  };

  return (
    <div className="container">
      <h1>Live Location Map</h1>
      <div className="button-container">
        <button onClick={handleStartTracking}>Start Tracking</button>
        <button onClick={handleStopTracking}>Stop Tracking</button>
      </div>
      <div className="map-container">
        {latitude && longitude ? (
          <div>
            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
            <iframe
              title="Live Location Map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=AIzaSyCUGVPe0yb2tJcmxzLHzhEwA38R-Uv5U3c`} //After the key please update your google cloud key
            ></iframe>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Map;
