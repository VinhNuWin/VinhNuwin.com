import { motion, useScroll } from "framer-motion";
import {
  listVariants,
  itemVariants,
  item,
  cardVariants,
} from "./variants/containerVariants";

export const Scroll = () => {
  return (
    <motion.div className="banner">
      <motion.h2
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        UX RESEARCHER
      </motion.h2>
      <motion.h2
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        PROMPT ENGINEER
      </motion.h2>
      <motion.h2
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        UX DESIGNER
      </motion.h2>
    </motion.div>
  );
};
