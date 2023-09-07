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

  // window.addEventListener("scroll", function () {
  //   if (this.window.scrollY > 500) {
  //     console.log(`You have scrolled ${scrollY} pixels`);
  //     console.log(this.window.getElementById("hero-section"));
  //   }
  // });

  return (
    <motion.div
      id="hero-section"
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="wrapper"
    >
      {/* <Nav /> */}
      <motion.div
        // id="1"
        // variants={scaleVariants}
        // initial="offsceen"
        // animate="onscreen"
        className="container"
      >
        <div className="container-bubble">
          <h4 className="">Hello! I'm</h4>
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
