import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [position, setPosition] = useState([51.05361111, 3.72527778]),
  argenx=[51.00941, 3.72382]
// TODO: add geojson to add chloropleth map
// https://fmuchembi.medium.com/let-us-build-a-choropleth-map-using-react-leaflet-together-3245d30ac900

  return (
    // <div className="App">
    <Box>
      <MapContainer
        center={position}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={argenx}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
    // </div>
  );
}

export default App;
