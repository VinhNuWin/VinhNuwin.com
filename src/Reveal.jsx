import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { Scroll } from "./Scroll";

export const Reveal = () => {
  const targetRef = useRef(<HTMLDivElement />);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const animationOrder = {
    initial: 0,
    fadeInEnd: 0.15,
    createBranchEnd: 0.7,
    endTextFadeInStart: 0.95,
  };

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.75]);

  return (
    <motion.section id="" ref={targetRef}>
      <motion.div
        id=""
        // style={{ scale, opacity }}
        // className="test"
        // variants={{
        //   hidden: { opacity: 0, y: 75 },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 0.5, delay: 0.25 }}
      >
        <motion.h2 className="test" style={{ opacity }}>
          H-1
        </motion.h2>
      </motion.div>
      <motion.h2 className="test2" style={{ opacity }}>
        H-2
      </motion.h2>
    </motion.section>
  );
};
