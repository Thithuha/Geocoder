import mapboxgl from 'mapbox-gl';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGh1aGEiLCJhIjoiY2tycWM0NWlwMDVldjJubWp4eG42bzgzNCJ9.6eMCABw6_kXOoHUJP8yW7A';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
