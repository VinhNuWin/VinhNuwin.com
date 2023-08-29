import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { Scroll } from "./Scroll";

// interface Props {
//   children: JSX.Element;
//   width: "fit-content" | "100";
// }

export const Reveal = () => {
  const targetRef = useRef(<HTMLDivElement />);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div>
      <motion.div
        id="border"
        style={{ opacity }}
        ref={targetRef}
        // variants={{
        //   hidden: { opacity: 0, y: 75 },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h2>Hello</h2>
      </motion.div>
    </motion.div>
  );
};
