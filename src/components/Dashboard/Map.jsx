import React from 'react'
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {

const loader = new Loader({
  apiKey: "AIzaSyCUGVPe0yb2tJcmxzLHzhEwA38R-Uv5U3c",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    // do something
  });

  return (
    <div id="map"> 
    </div>
  )
}

export default Map
