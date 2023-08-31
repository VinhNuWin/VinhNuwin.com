import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { Scroll } from "./Scroll";
import ProjectImages from "./ProjectImages";
import { Video } from "./Video";

export const Reveal = () => {
  const targetRef = useRef(<HTMLDivElement />);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  const animationOrder = {
    initial: 0,
    fadeInEnd: 0.3,
    fadeOutStart: 0.7,
    fadeOutEnd: 0.95,
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
  const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.75]);

  return (
    <motion.section id="" ref={targetRef}>
      <motion.div className="test" style={{ opacity }}>
        <Scroll ref={targetRef} />
      </motion.div>
      <motion.div>
        <Video />
      </motion.div>
    </motion.section>
  );
};
