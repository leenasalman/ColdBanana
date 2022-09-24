import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <div className="card" key={props.keyID}>
        <img src={props.cardImg} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <ul>
            <li>
              <Icon.Shop />
              <p>{props.cardAddress}</p>
            </li>
            <li>
              <Icon.Pin />
              <p>{props.cardPin}</p>
            </li>
            <li>
              <Link to={"/" + props.cardShare}>
                <Icon.Share />
                <p>Show Location</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardItem;
