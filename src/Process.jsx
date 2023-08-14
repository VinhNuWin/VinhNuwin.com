import { motion } from "framer-motion";
import {
  cardVariants,
  listVariants,
  scrollVariants,
} from "./variants/containerVariants";

export const Process = () => {
  return (
    <motion.div className="process-wrapper">
      <a href="work-process.png">
        <img src="/src/assets/work-process.png"></img>
      </a>
      {/* <motion.ul>
        <motion.li>Research</motion.li>
        <motion.li>Design</motion.li>
        <motion.li>Test</motion.li>
        <motion.li>Iterate & Refine</motion.li>
      </motion.ul> */}
    </motion.div>
  );
};
