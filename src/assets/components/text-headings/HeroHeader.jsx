import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../../variants/animatedText";
import "../../../App.css";

export default function HeroHeader() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Hi, my name is Vinh Nuwin" },
    {
      type: "heading2",
      text: "Artificial Intelligence engineer",
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
