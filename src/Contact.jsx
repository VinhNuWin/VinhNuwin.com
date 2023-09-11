import axios from "axios";
import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  const handleEmailSubmit = async () => {
    console.log("email sent");

    const response = await axios.post(
      `https://dvaa-smtp.onrender.com/contact`,
      {
        withCredentials: false,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        // registryReport: registryReport,
        email: email,
      }
    );

    console.log("Report has been submitted");
  };

  return (
    <div>
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
            <button onClick={handleEmailSubmit}>Contact</button>
          </form>
        </div>

        <div className="container-contact">
          <div>
            <a href="https://twitter.com/VinhNuWin">
              <i class="fa-brands fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/vinhnuwin/">
              <i class="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/VinhNuWin">
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
            <a href="https://www.youtube.com/@VinhNuwin">
              <i class="fa-brands fa-youtube"></i>
              <span>Youtube</span>
            </a>

            <a href="https://www.linkedin.com/in/vinhnuwin/">
              <i class="fa-brands fa-linkedin"></i>
              <span>CodePen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
