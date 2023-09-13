import axios from "axios";
import React, { useState, useRef } from "react";
import { Stars } from "./Stars";

export const Contact = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  const handleEmailSubmit = async () => {
    const response = await axios.post(
      // "http://localhost:3002/contact",
      `https://dvaa-smtp.onrender.com/contact`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        email: email,
      }
    );

    console.log("Report has been submitted");
    console.log(email);
  };

  return (
    <div className="content">
      <Stars />
      <div className="header">
        <div id="bubble">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="">
        <div className="container-contact">
          <h2 className="container-h2">Get in touch</h2>

          <form>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Type your Email"
              required
            />
          </form>

          <button id="bubble" onClick={handleEmailSubmit}>
            Connect
          </button>

          <div className="container-contact">
            <div className="header">
              <div id="bubble">
                <h2>Schedule</h2>
              </div>
              <h2 className="header-h2"> a Meeting</h2>
            </div>
          </div>
        </div>

        <div className="container-contact">
          <div>
            <a id="icon" href="https://twitter.com/VinhNuWin">
              <i class="fa-brands fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a id="icon" href="https://www.linkedin.com/in/vinhnuwin/">
              <i class="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a id="icon" href="https://github.com/VinhNuWin">
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
            <a id="icon" href="https://www.youtube.com/@VinhNuwin">
              <i class="fa-brands fa-youtube"></i>
              <span>Youtube</span>
            </a>

            <a id="icon" href="https://www.linkedin.com/in/vinhnuwin/">
              <i class="fa-brands fa-linkedin"></i>
              <span>CodePen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
