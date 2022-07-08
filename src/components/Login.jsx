import React from "react";
import "../css/login.css";
import pic from "../images/loginimg.png";

function Login() {
  return (
    <div id="login">
      <div className="loginTable">
        <h1>Hello! </h1>
        <h1>Good Morning</h1>
        <h4>Login your account</h4>
        <form action="" className="loginForm">
          <label htmlFor="email">Username</label>
          <input
            name="email"
            type="text"
            placeholder="-------------------------------"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="-------------------------------"
          />
          <p>Forget Password?</p>
          <button className="whiteButton">Login</button>
          <a href="/">Create Account</a>
        </form>
      </div>
      <img className="loginImg" src={pic} alt="" />
    </div>
  );
}

export default Login;
