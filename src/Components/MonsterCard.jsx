import React from "react";
import "./MonsterCard.css";

export default (props) => (
  <div className="card-container">
    <img alt="" src={`https://robohash.org/${props.monster.id}?set=set2`} />
    <h1>{props.monster.name}</h1>
  </div>
);
