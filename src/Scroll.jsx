import { motion, useScroll } from "framer-motion";
import { Test } from "./assets/lotties/test";
import {
  listVariants,
  itemVariants,
  item,
  cardVariants,
} from "./variants/containerVariants";

export const Scroll = () => {
  return (
    <div className="marquee">
      <div className="marquee-container">
        <motion.h2 className="marquee-item">UX RESEARCHER</motion.h2>
        <h2 className="marquee-item">PROMPT ENGINEER</h2>
        <h2 className="marquee-item">UX DESIGNER</h2>
      </div>
    </div>
  );
};
