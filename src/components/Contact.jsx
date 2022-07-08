import React from "react";
import "../css/contact.css";
import contactimg from "../images/contactImg.png";

function Contact() {
  return (
    <div id="contact">
      <img src={contactimg} alt="" />
      <div className="contactContent">
        <h4>CONTACT US NOW</h4>
        <h1>Ask a question</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          dolorem eius eveniet?
        </p>
        <form action="" className="contactForm">
          <div className="formInput">
            <input className="userInput" type="text" placeholder="Full Name" />
            <input className="emailInput" type="email" placeholder="Email ID" />
          </div>
          <textarea name="" id="formArea" cols="60" rows="10">
            Message
          </textarea>
          <button className="whiteButton">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
