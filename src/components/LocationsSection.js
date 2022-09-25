import React from "react";
import Card from "./Cards";
import "./LocationSection.css";

function LocationsSection(props) {
  return (
    <section className="card-section">
      <div className="container">
        <Card mapData={props.mapData} />
      </div>
    </section>
  );
}

export default LocationsSection;
