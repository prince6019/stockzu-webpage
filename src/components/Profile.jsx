import React from "react";
import "../css/profile.css";
import johnwick from "../images/johnwick-modified.png";

function Profile() {
  return (
    <div className="profile">
      <img src={johnwick} alt="" />
      <p>lorem ipsum dolar</p>
      <h2>Mr. JohnWick</h2>
      <p>lorem ipsum dolar sit amet</p>
    </div>
  );
}

export default Profile;
