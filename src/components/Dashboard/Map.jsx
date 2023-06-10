// src/components/Dashboard/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ coordinates }) => {
  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates}>
        <Popup>Your location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
