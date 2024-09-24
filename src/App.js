import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import geojsonFeature from "./geojsonFeature.json";

function App() {
  const [position, setPosition] = useState([51.05361111, 3.72527778]),
    argenx = [51.00941, 3.72382],
    getColor = (d) => {
      return d === "BEL"
        ? "#800026"
        : d === "FRA"
        ? "#BD0026"
        : d > 200
        ? "#E31A1C"
        : d > 100
        ? "#FC4E2A"
        : d > 50
        ? "#FD8D3C"
        : d > 20
        ? "#FEB24C"
        : d > 10
        ? "#FED976"
        : "#FFEDA0";
    },
    style = (feature) => {
      return {
        fillColor: getColor(feature.properties.ISO3_CODE),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    };
  // TODO: add geojson to add chloropleth map
  // https://fmuchembi.medium.com/let-us-build-a-choropleth-map-using-react-leaflet-together-3245d30ac900

  useEffect(() => {
    // L.geoJSON(geojsonFeature).addTo(map);
  }, []);
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
        <GeoJSON
          attribution="&copy; credits due..."
          data={geojsonFeature}
          style={style}
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
