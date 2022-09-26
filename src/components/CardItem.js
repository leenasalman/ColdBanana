import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <div className="card col-md" key={props.keyID}>
        <img src={props.cardImg} alt="image of location card" />
        <div className="card-body">
          <h4 className="card-title">{props.cardTitle}</h4>
          <ul>
            <li>
              <Icon.Shop />
              <p>{props.cardAddress}</p>
            </li>
            <li>
              <Icon.Pin />
              <p className="para-style" title={props.cardPin}>{props.cardPin.substring(0,20)}...</p>
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
      {/* add divider after every Even div.card element */}
      {props.keyID % 2 === 0 ? <div className="w-100"></div> : ""}
    </>
  );
}

export default CardItem;
