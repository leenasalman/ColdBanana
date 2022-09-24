import React from 'react';
import Card from './Cards';
import './LocationSection.css'

function LocationsSection(props) {
  return (
    <section className="card-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <Card mapData={props.mapData}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection