import { motion, useScroll } from "framer-motion";
import {
  listVariants,
  itemVariants,
  item,
  scaleVariants,
} from "./variants/containerVariants";
import { Nav } from "./Nav";
import HeroHeader from "./assets/components/text-headings/HeroHeader";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="hero-section"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav />
      <motion.div
        className=""
        id="1"
        variants={scaleVariants}
        initial="offsceen"
        animate="onscreen"
      >
        <HeroHeader />
      </motion.div>
    </motion.div>
  );
};
