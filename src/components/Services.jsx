import React from "react";
import "../css/services.css";
import serviceimg1 from "../images/serviceimg1.png";
import serviceimg2 from "../images/serviceimg2.png";
function Services() {
  return (
    <div id="services">
      <div className="serviceSection1">
        <p>Services</p>
        <h1>Check Out Our Specialized Services</h1>
      </div>
      <div className="serviceSection section2">
        <img src={serviceimg1} alt="" />
        <h4>Discount Broking</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button>Learn More</button>
      </div>
      <div className="serviceSection section3">
        <img src={serviceimg2} alt="" />
        <h4>Portfolio Match</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Services;
