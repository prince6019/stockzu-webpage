import React from "react";
import "../css/footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="col1">
          <h1>STOCKZO</h1>
          <li>0123456789</li>
          <li>info@STOCKZO.de</li>
          <li>
            Vishal Complex, 1st Floor Sector 7, HSR Layout, Banglore,
            Karnatka,560102.
          </li>
        </div>
        <div className="col2">
          <h1>MENU</h1>
          <li>Home</li>
          <li>About Us</li>
          <li>Login Up</li>
          <li>Blogs</li>
          <li>Contact</li>
        </div>
        <div className="col3">
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            minima odit natus iste!
          </p>
          <form action="">
            <input type="text" placeholder="Subscribe" />
            <button className="blackButton">Done</button>
          </form>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerIcons">
          <FaTwitter className="footericon" />
          <AiFillInstagram className="footericon" />
          <FaFacebook className="footericon" />
        </div>

        <div class="app-icons">
          <a href="https://apps.apple.com/app/id1551353775">
            <img
              class="apple"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
              alt="Download on the App Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stagescycling.stages">
            <img
              class="android"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Footer;
