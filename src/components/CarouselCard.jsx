import React from "react";
import "../css/carouselcard.css";

function CarouselCard({ id, name }) {
  return (
    <div className="CarouselCard">
      <h1>{id}</h1>
      <h5>{name}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className="blackButton">Read More</button>
    </div>
  );
}

export default CarouselCard;
