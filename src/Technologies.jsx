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
    <div>
      <div className="header">
        <motion.div id="bubble">
          <h2>Technologies</h2>
        </motion.div>
      </div>

      <div className="wrapper">
        <div className="grid-wrapper">
          <div className="header">
            <h3>Languages</h3>
          </div>
          <div className="container-bubble">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
          </div>

          <div className="header">
            <h3>Frontend</h3>
          </div>
          <div className="container-bubble">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
          </div>

          <div className="header">
            <h3>Backend</h3>
          </div>
          <div className="container-bubble">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
          </div>

          <div className="header">
            <h3>Tools</h3>
          </div>
          <div className="container-bubble">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Javascript</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <img src={milo}></img>
        </div>
      </div>
    </div>
  );
};
