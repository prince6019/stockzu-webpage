import React from "react";
import "../css/home.css";
import homeimg1 from "../images/homeimg1.png";
import homeimg2 from "../images/homeimg2.png";

function Home() {
  return (
    <div id="home">
      <div className="homeSection homesection1">
        <div className="homeCard1">
          <h1>Market Forecast</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, vel
            voluptatum consectetur eius natus molestias eligendi repellendus
            accusantium laudantium ipsa? Nulla, fuga minus!
          </p>
          <button className="blackButton"> Get Started</button>
        </div>
        <img src={homeimg1} alt="" />
      </div>
      <div className="homeSection homesection2">
        <img src={homeimg2} alt="" />
        <div className="homeCard2">
          <h5>what is</h5>
          <h1>Stockzo?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            reiciendis illo iure, amet alias earum nam cupiditate porro minima
            in dicta consectetur deleniti necessitatibus provident?
          </p>
          <button className="blackButton"> Stockzo Mission</button>
          <button className="whiteButton"> The platform in detail</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
