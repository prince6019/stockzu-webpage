import React from "react";
import "../css/team.css";
import Profile from "./Profile";

function Team() {
  return (
    <div id="team">
      <h1 className="teamTitle">Our Team</h1>
      <div className="teamProfiles">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

export default Team;
