import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../../variants/animatedText";
import "../../../App.css";

export default function HeroSubHeader() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "paragraph",
      text: "The last 8 years I've started and helped build and scale software for some pretty cool companies. My love is to turn ideas into real useable products and with it, the journey it entails. If you feel our passions align lets connect and build something new",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.035,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
