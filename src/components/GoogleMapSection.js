import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

function GoogleMapSection(props) {
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  let position;

  const containerStyle = {
    width: "80%",
    height: "400px",
  };
  const center = {
    lat: 50.720202,
    lng: -1.879404,
  };
  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={15} center={center}>
        {props.mapMarkers &&
          props.mapMarkers.map((location, index) => (
            <Marker
              key={location.id + "_" + index}
              position={{
                lat: location.lat,
                lng: location.lng,
              }}
              label={location.location_name}
              draggable={false}
              onClick={(event) => markerClicked(location, location.id)}
            >
              {activeInfoWindow === location.id && (
                <InfoWindow position={{ lat: location.lat, lng: location.lng }}>
                  <b>
                    {location.location_name}, {location.lat}, {location.lng}
                  </b>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapSection;
