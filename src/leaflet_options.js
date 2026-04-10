'use strict';

/**
 * @description Leaflet options for the demo. You can add your own tile layers here, and they will be available in the layer switcher.
 */
let L = require('leaflet')

let EdgeSMAP = L.tileLayer('https://edge-tiles.sadata.id/tile/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors — ' + '<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>',
  maxZoom: 20
})

/**
 * @description Export the options for the demo. You can add your own options here, and they will be available in the demo.
 */
module.exports = {
  defaultState: {
    center: L.latLng(-6.318370, 106.926498),
    zoom: 11,
    waypoints: [],
    language: 'en',
    alternative: 1,
    layer: EdgeSMAP
  },
  services: [{
    label: 'Bike',
    path: 'https://edge-maps.sadata.id/route/v1'
  }],
  layer: [{
    'SADATA EDGE': EdgeSMAP,
  }],
  overlay: {},
  baselayer: {
    one: EdgeSMAP,
    // two: outdoors,
    // three: satellite,
  }
}