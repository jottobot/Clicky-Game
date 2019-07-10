import React from "react";
import "./style.css";

const PicturesCard = props => (
  <div className="card" onClick={() => props.clicks(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PicturesCard;