import React from "react";
import "../css/carousel.css";
import CarouselCard from "./CarouselCard";

function Carousel() {
  return (
    <div id="carouselRow">
      <h1>Here 's what our users have to say:</h1>
      <div className="Row">
        <div className="CarouselCard blackcard">
          <h1>01</h1>
          <h5>KATHIDHAN</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="whiteButton">Read More</button>
        </div>
        <CarouselCard id="02" name="Head of Strategic Marketing,IT Company" />
        <CarouselCard id="03" name="Abhay Gupta" />
      </div>
    </div>
  );
}

export default Carousel;
