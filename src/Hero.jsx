import { motion, useScroll } from "framer-motion";
import {
  listVariants,
  itemVariants,
  item,
  scaleVariants,
} from "./variants/containerVariants";
import { Nav } from "./Nav";
import HeroHeader from "./assets/components/text-headings/HeroHeader";
import HeroSubHeader from "./assets/components/text-headings/HeroSubHeader";

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
        id="1"
        className="hero-1"
        variants={scaleVariants}
        initial="offsceen"
        animate="onscreen"
      >
        <HeroHeader />
      </motion.div>
      {/* <motion.div className="hero-2" id="2" variants={item}>
        User Experience designer
      </motion.div> */}
      {/* <motion.div className="hero-3">
        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <a id="instagram" href="Instagram">
              Instagram
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a id="linkedin" href="LinkedIn">
              LinkedIn
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a id="github" href="GitHub">
              GitHub
            </a>
          </motion.li>
        </motion.ul>
      </motion.div> */}
      <motion.div className="hero-4" variants={item}>
        <HeroSubHeader />
      </motion.div>
    </motion.div>
  );
};
