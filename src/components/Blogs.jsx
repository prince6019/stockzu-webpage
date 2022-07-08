import React from "react";
import CarouselCard from "./CarouselCard";
import "../css/blogs.css";

function Blogs() {
  return (
    <div id="blogs">
      <h1>Blogs</h1>
      <div className="CarouselCard blackCard">
        <h5>KATIDHAN</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="whiteButton">Read More</button>
      </div>
      <div className="CarouselCard card">
        <h5>KATIDHAN</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="blackButton">Read More</button>
      </div>
      <div className="CarouselCard card ">
        <h5>KATIDHAN</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="blackButton">Read More</button>
      </div>
      <div className="CarouselCard card">
        <h5>KATIDHAN</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="blackButton">Read More</button>
      </div>
      <div className="blogButton">
        <button className="blackButton">See More </button>
      </div>
    </div>
  );
}

export default Blogs;
