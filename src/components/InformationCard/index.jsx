import React from "react";
import moment from "moment";
import "./Card.css";

const InformationCard = ({
  name,
  id,
  image,
  origin,
  status,
  currentLocation,
  created
}) => {
  return (
    <div className="CardWrapper" key={id}>
      <img className="CardImage" src={image} alt={`${name}`} />
      <div className="CardText">
        <div className="CardTitle">{name}</div>
        <div className="CardDescription">
          {status === "unknown" ? "Unknown" : status} on {currentLocation}.
          Added {moment(created).format("L")}
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
