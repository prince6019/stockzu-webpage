import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../css/header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id="header">
      <a href="#" class="navbar-brand">
        {" "}
        STOCKOZ
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto">
          <li classcd="nav-item">
            <a class="nav-link" href="#header">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              ABOUT US
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#login">
              LOGIN UP
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blogs">
              BLOGS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              CONTACT{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cta">
              <FaTwitter className="headericon" />
              <AiFillInstagram className="headericon" />
              <FaFacebook className="headericon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
