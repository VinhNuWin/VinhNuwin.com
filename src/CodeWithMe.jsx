import { list, item } from "./libs/variants";
import { motion } from "framer-motion";

export const CodeWithMe = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div id="bubble">
          <h2>Code</h2>
        </div>
        <h2 className="header-h2"> With Me</h2>
      </div>
      <div>
        <motion.div
          className="video-wrapper"
          variants={list}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.iframe
            variants={item}
            className="video-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></motion.iframe>
          <motion.iframe
            variants={item}
            className="video-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QtFS9v6oSW4?si=2nLDP_7ohqxJY1MH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></motion.iframe>
          <motion.iframe
            variants={item}
            className="video-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2uP9h98uPPM?si=nOEUwBvVmZrAcHCn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></motion.iframe>
        </motion.div>
      </div>
    </div>
  );
};
