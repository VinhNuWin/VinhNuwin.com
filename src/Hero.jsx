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

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 500) {
      console.log(`You have scrolled ${scrollY} pixels`);
      console.log(this.window.getElementById("hero-section"));
    }
  });

  return (
    <motion.div
      id="hero-section"
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      <div id="stars" className=""></div>
      {/* <div id="stars2"></div> */}
      <div id="stars3" className=""></div>
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
