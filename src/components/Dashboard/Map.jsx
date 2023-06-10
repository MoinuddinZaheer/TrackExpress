import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapChild=()=>{
  const context = "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const map = context.map;

      map.setView([latitude, longitude], 12);

      new window.L.Marker([latitude, longitude]).addTo(map);
    });
  }, [context.map]);

  return <div id="map" style={{ height: '100vh' }}></div>;
}

const Map = () => {
return(
  <MapContainer
center={["12.586045","77.046359E"]}
zoom="100%"
style={{ height: '100vh' }}
>
<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution="Map data © OpenStreetMap contributors"
/>
<MapChild />
</MapContainer>
)
}
export default Map;



