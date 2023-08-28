import { motion, useScroll } from "framer-motion";
import {
  listVariants,
  scrollVariants,
  item,
  container,
  itemVariants,
} from "./variants/containerVariants";

export const TechSkills = () => {
  return (
    <motion.div className="tech-skills-wrapper">
      <h2>Spatial Software Engineering</h2>
      <motion.div
        variants={listVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          id="pws"
          className="tech-skills-container"
          variants={scrollVariants}
          initial="offscreen"
          animate="onscreen"
        >
          <motion.h2>Pragmatic Web Solutions</motion.h2>
          <motion.p>
            I provide custom web solutions using modern technologies like React,
            TypeScript, JavaScript, HTML, CSS, Node.js, Express, & MongoDB to
            create tailored, scalable, & efficient web applications for your
            specific needs.
          </motion.p>
        </motion.div>
        <motion.div
          id="uxd"
          className="tech-skills-container"
          // variants={scrollVariants}
          // initial="offscreen"
          // whileInView="onscreen"
        >
          <motion.h2>Responsive UX Design</motion.h2>
          <motion.p>
            Specialized in leveraging styling libraries, frameworks, & industry
            best practices. With a focus on adaptability & user-centered
            experiences, I create interfaces that seamlessly adjust to various
            devices, ensuring optimal usability & visual appeal.
          </motion.p>
        </motion.div>
        <motion.div
          id="wd"
          className="tech-skills-container"
          // variants={scrollVariants}
          // initial="offscreen"
          // whileInView="onscreen"
        >
          <motion.h2>Web Development</motion.h2>
          <motion.p>
            I specialize in providing website maintenance & support services. I
            am committed to delivering ongoing updates, support, & maintenance
            to ensure your website operates smoothly & meets your evolving
            needs.
          </motion.p>
        </motion.div>
      </motion.div>
      {/* <div>
        <img src="/src/assets/aisolutions.png"></img>
      </div> */}
    </motion.div>
  );
};
