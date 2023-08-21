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
      <div id="title" className="hero-4">
        <span>
          a Latin professor at Hampden-Sydney College in Virginia, comes from a
          line in section 1.10.32.
        </span>
      </div>
    </div>
  );
}
