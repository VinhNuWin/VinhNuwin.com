import { motion, useScroll } from "framer-motion";
import { Test } from "./assets/lotties/test";
import {
  listVariants,
  scrollVariants,
  container,
  cardVariants,
} from "./variants/containerVariants";
import js from "./assets/icons/javascript.svg";
import milo from "./assets/milo.jpg";

export const Technologies = () => {
  return (
    <div className="">
      <div className="header">
        <motion.div id="bubble">
          <h2>Technologies</h2>
        </motion.div>
      </div>

      <div className="wrapper">
        <div className="container-wrapper">
          <div className="header-h3">
            <h3>Languages</h3>
          </div>
          <div className="container">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>JavaScript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>TypeScript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>C#</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>HTML</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>CSS</h4>
            </div>
          </div>

          <div className="container">
            <div className="header-h3">
              <h3>Frontend</h3>
            </div>
            <div className="container">
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>React.js</h4>
              </div>
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>ChakraUI</h4>
              </div>
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>SquareSpace</h4>
              </div>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Shopify</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Framer-Motion</h4>
            </div>
          </div>

          <div className="container">
            <div className="header-h3">
              <h3>Backend</h3>
            </div>
            <div className="container">
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>Node.js</h4>
              </div>
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>Express.js</h4>
              </div>
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>MongoDB</h4>
              </div>
            </div>

            <div className="header-h3">
              <h3>Tools</h3>
            </div>
            <div className="container-bubble">
              <div id="bubble2">
                <img className="icon" src={js}></img>
                <h4>Git</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={milo}></img>
        </div>
      </div>
    </div>
  );
};
