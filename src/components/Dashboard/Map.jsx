import React, { useState, useEffect } from 'react';
import './Map.css'
const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [path, setPath] = useState([]);

  useEffect(() => {
    if (trackingEnabled) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const newLatitude = position.coords.latitude;
          const newLongitude = position.coords.longitude;

          setLatitude(newLatitude);
          setLongitude(newLongitude);

          // Add the new location to the path
          setPath((prevPath) => [...prevPath, { lat: newLatitude, lng: newLongitude }]);
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
              src={`https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=YOUR_API_KEY`}
            ></iframe>
            {path.length > 0 && (
              <iframe
                title="Live Location Path"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/polyline?key=AIzaSyCUGVPe0yb2tJcmxzLHzhEwA38R-Uv5U3c&path=${path
                  .map((point) => `${point.lat},${point.lng}`)
                  .join('|')}`}  //After the key please update your google cloud key
              ></iframe>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Map;




