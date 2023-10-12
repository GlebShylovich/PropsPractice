import React from "react";
import "./card.scss";

export default function Card(props) {
  return (
    <div className={props.color}>
      <div className={props.darkcolor}>Unlimited {props.tariff}</div>
      <div className="cost">
        <sup>rub</sup>
        <p>{props.cost}</p>
        <sub>/month</sub>
      </div>
      <div className="speed">to {props.speed} Mbit/s</div>
      <div className="text">{props.text}</div>
    </div>
  );
}
