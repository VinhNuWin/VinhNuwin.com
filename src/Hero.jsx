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
      className="wrapper"
    >
      {/* <Nav /> */}
      <motion.div className="hero-container">
        <div id="bubble">
          <h4>Hello! I'm</h4>
        </div>
        <div className="container-h1">
          <h1>Vinh Nuwin,</h1>
        </div>
        <div className="container-h2">
          <h3>a full-stack developer</h3>
        </div>
        {/* <HeroHeader /> */}
      </motion.div>
    </motion.div>
  );
};
