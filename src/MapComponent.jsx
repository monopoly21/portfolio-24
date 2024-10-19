import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue with React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapComponent() {
  const nitkPosition = [13.0102, 74.7923]; // Coordinates for NITK, Surathkal

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <MapContainer
        center={nitkPosition}
        zoom={15} // Adjusted zoom level for a closer view
        scrollWheelZoom={false}
        className="h-48 w-full rounded-lg shadow-lg" // Tailwind classes for styling
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={nitkPosition}>
          <Popup>
            National Institute of Technology Karnataka (NITK), Surathkal.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
