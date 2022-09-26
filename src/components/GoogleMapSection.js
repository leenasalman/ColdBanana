import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import "./GoogleMapSection.css";

function GoogleMapSection(props) {
  const [activeInfoWindow, setActiveInfoWindow] = useState("");

  // map css style
  const containerStyle = {
    width: "100%",
    height: "713px",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "30px",
  };
  const center = {
    lat: 50.720202,
    lng: -1.879404,
  };

  //save index of the clicked marker on the map
  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
  };
  return (
    <section className="location-section">
      <div className="container">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={6}
            center={center}
          >
            {/* set marker for all locations on google maps api */}
            {props.mapMarkers &&
              props.mapMarkers.map((location, index) => (
                <Marker
                  key={location.id+"_"+index}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={(event) => markerClicked(location, location.id)}
                >
                  {activeInfoWindow === location.id && (
                    <InfoWindow
                      position={{
                        lat: location.lat,
                        lng: location.lng,
                      }}
                    >
                    <b>{location.location_name}, {location.address_line}</b>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
}

export default GoogleMapSection;
