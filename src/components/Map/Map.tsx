// React
import React, { useState, useRef, useEffect } from 'react';

// Mapbox
import mapboxgl from 'mapbox-gl';

// React Map
import { 
  Map as MapWrapper,
  GeolocateControl,
  NavigationControl,
  Marker,
} from 'react-map-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN_ACCESS;

export default function Map() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <MapWrapper
        initialViewState={{
          longitude: 112.6273191942892,
          latitude: -7.989777259175051,
          zoom: 18,
        }}
        style={{ width: '500px', height: '500px' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <GeolocateControl />
        <NavigationControl/>
        <Marker 
        longitude={112.6273191942892}
        latitude={-7.989777259175051}
        anchor="center" />
      </MapWrapper>
    </div>
  );
}
