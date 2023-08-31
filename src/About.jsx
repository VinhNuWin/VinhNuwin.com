import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import spatialComputing from "./assets/spatial-computing.png";

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
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initialImageIn,
      animationOrder.imageInEnd,
      animationOrder.initialImageIn,
      animationOrder.imageOutEnd,
    ],
    [1.1, 1, 0.9, 0.5]
  );

  return (
    <motion.div className="spatial-wrapper" id="border" ref={targetRef}>
      <motion.h2 className="spatial-item" style={{ opacity }}>
        About me
      </motion.h2>
      <div className="spatial-container">
        <motion.img
          src={spatialComputing}
          style={{ opacity, scale }}
          layout="size"
        />
      </div>
    </motion.div>
  );
};
