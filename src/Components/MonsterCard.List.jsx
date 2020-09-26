import React from "react";
import "./MonsterCard.List.css";
import MonsterCard from "./MonsterCard";
export default (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <MonsterCard key={monster.id} monster={monster} />
    ))}
  </div>
);
