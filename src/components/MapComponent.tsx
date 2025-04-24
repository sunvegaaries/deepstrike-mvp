'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

interface MarkerData { lat: number; lng: number; type: string; }
export function LocationMarker({ setMarkers }: { setMarkers: Dispatch<SetStateAction<MarkerData[]>> }) {
  useMapEvents({ click(e) {
    setMarkers(m => [...m, { lat: e.latlng.lat, lng: e.latlng.lng, type: 'НПЗ' }]);
  }});
  return null;
}
export default function MapComponent() {
  const [markers, setMarkers] = React.useState<MarkerData[]>([]);
  return (
    <MapContainer center={[55, 37]} zoom={5} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker setMarkers={setMarkers} />
      {markers.map((m, i) => (
        <Marker key={i} position={[m.lat, m.lng]}><Popup>{m.type}</Popup></Marker>
      ))}
    </MapContainer>
  );
}