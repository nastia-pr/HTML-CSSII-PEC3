/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import mapboxgl from 'mapbox-gl';

/**
 * Write any other JavaScript below
 */

mapboxgl.accessToken = "pk.eyJ1IjoibmFzbmFzdGkiLCJhIjoiY2xwczl3d3V3MDFoZTJqcXM5N3NremZmZiJ9.7SlUptC06BFl3rrYk3jYtQ";

const santiagoDeCompostelaCoordinates = [-8.5449, 42.8782];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: santiagoDeCompostelaCoordinates,
  zoom: 9
});


new mapboxgl.Marker().setLngLat(santiagoDeCompostelaCoordinates).addTo(map);
