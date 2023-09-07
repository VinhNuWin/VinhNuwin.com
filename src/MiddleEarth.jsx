import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import middleEarth from "./assets/middle-earth.png";
import { UI } from "./UI";

export const MiddleEarth = () => {
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
    [0, 0.4, 0.8, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initialImageIn,
      animationOrder.imageInEnd,
      animationOrder.initialImageIn,
      animationOrder.imageOutEnd,
    ],
    [0.75, 1.25, 1.5, 1.75]
  );

  return (
    <motion.div id="border" className="middleEarth-wrapper" ref={targetRef}>
      <motion.div className="middleEarth-container">
        <motion.img
          src={middleEarth}
          style={{ opacity, scale }}
          //   layout="size"
        />
        <h1>HELLOOOO</h1>
      </motion.div>
      <UI />
    </motion.div>
  );
};
