import React, { useState, useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN_ACCESS;
// const targetLocation = {
//   latitude: -7.989777259175051,
//   longitude: 112.6273191942892,
// };

export default function Map() {
  const mapContainer = useRef<any>('');
  const map = useRef<any>('');
  const [lng, setLng] = useState(112.6273191942892);
  const [lat, setLat] = useState(-7.989777259175051);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="h-[100vh]">
      </div>
    </div>
  );
}
