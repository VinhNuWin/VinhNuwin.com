import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import spatialComputing from "./assets/vr.png";
import milo from "./assets/milo.jpg";

export const About = () => {
  const targetRef = useRef(<HTMLDivElement />);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const animationOrder = {
    initial: 0.15,
    fadeInEnd: 0.25,
    initialImageIn: 0.25,
    imageInEnd: 0.6,
    initialImageOut: 0.7,
    imageOutEnd: 0.9,
    fadeOutStart: 0.9,
    fadeOutEnd: 1.01,
  };

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.fadeOutStart,
      animationOrder.fadeOutEnd,
    ],
    [0, 0.5, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initialImageIn,
      animationOrder.imageInEnd,
      animationOrder.initialImageIn,
      animationOrder.imageOutEnd,
    ],
    [1.0, 2, 3, 3]
  );

  return (
    <div>
      <div className="header">
        <motion.div id="bubble">
          <h2>About</h2>
        </motion.div>
        <h2 className="header-h2">Me</h2>
      </div>
      <motion.div className="wrapper" ref={targetRef}>
        <div className="container">
          <span>
            Hello! I'm Vinh and I'm a 4th year Computer Science major at UCSB
            with an interest in full-stack development. With my creative ideas
            and eye for design, I enjoy creating applications that are both
            visually appealing and user-friendly. Currently, the technologies
            I'm working with are Javascript, React, and Node.js!
          </span>
        </div>
        <div className="container">
          <img src={milo}></img>
        </div>
      </motion.div>
    </div>
  );
};
