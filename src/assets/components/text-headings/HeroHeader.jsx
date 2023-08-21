import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../../variants/animatedText";
import "../../../App.css";

export default function HeroHeader() {
  return (
    <div>
      <div id="title">
        <span>Hi,</span>
        <span>my name's Vinh Nuwin</span>
      </div>
      <div className="hero-4 ">
        <h3>Software Engineer</h3>
      </div>
    </div>
  );
}
