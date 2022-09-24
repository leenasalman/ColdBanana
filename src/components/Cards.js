import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards(props) {
  return (
    <div className="cards">
      <h2>Our Locations</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            {props.mapData &&
              props.mapData.map(
                ({
                  id,
                  location_name,
                  address_line,
                  image,
                  pin,
                  share,
                  lat,
                  lng,
                }) => (
                  <CardItem
                    key={id}
                    keyID={id}
                    cardTitle={location_name}
                    cardAddress={address_line}
                    cardImg={image}
                    cardPin={pin}
                    cardShare={share}
                    cardLat={lat}
                    cardLong={lng}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
