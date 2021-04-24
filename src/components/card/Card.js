import React from "react";
import "./card.scss";

function Card({ name, article }) {
  return (
    <div className="card">
      <img
        className="image"
        src="https://images.ua.prom.st/347656386_schetchik-dt-liter.jpg"
      ></img>
      <h3>{name}</h3>
      <em style={{ color: "#8B868F" }}>{article}</em>
      <button>Details...</button>
    </div>
  );
}

export default Card;
