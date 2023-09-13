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
import ts from "./assets/icons/typescript.svg";
// import aws from "./assets/icons/aws.svg";
// import azure from "./assets/icons/azure.svg";
// import blender from "./assets/icons/blender.svg";
import git from "./assets/icons/github.svg";
import mongodb from "./assets/icons/database.svg";
import shopify from "./assets/icons/shopify.svg";
// import framer from "./assets/icons/framer.svg";
import node from "./assets/icons/node.svg";
import chakra from "./assets/icons/chakra.svg";
import squarespace from "./assets/icons/squarespace.svg";
import react from "./assets/icons/react.svg";
import css from "./assets/icons/css3.svg";
import html from "./assets/icons/html5.svg";
import { Stars } from "./Stars";

export const Technologies = () => {
  return (
    <div className="">
      <Stars />
      <div className="header">
        <motion.div id="bubble">
          <h2>Technologies</h2>
        </motion.div>
      </div>

      <div className="container">
        <div className="container-wrapper">
          <div className="header-h3">
            <h3>Languages</h3>
          </div>
          <div className="container-item">
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>JavaScript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={ts}></img>
              <h4>TypeScript</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>C#</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={html}></img>
              <h4>HTML</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={css}></img>
              <h4>CSS</h4>
            </div>
          </div>

          <div className="header-h3">
            <h3>Frontend</h3>
          </div>
          <div className="container-item">
            <div id="bubble2">
              <img className="icon" src={react}></img>
              <h4>React.js</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={chakra}></img>
              <h4>ChakraUI</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={squarespace}></img>
              <h4>SquareSpace</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={shopify}></img>
              <h4>Shopify</h4>
            </div>
            <div id="bubble2">
              <img className="icon" src={js}></img>
              <h4>Framer-Motion</h4>
            </div>

            <div className="header-h3">
              <h3>Backend</h3>
            </div>
            <div className="container-item">
              <div id="bubble2">
                <img className="icon" src={node}></img>
                <h4>Node.js</h4>
              </div>
              <div id="bubble2">
                <img className="icon" src={mongodb}></img>
                <h4>MongoDB</h4>
              </div>
            </div>

            <div className="header-h3">
              <h3>Tools</h3>
            </div>
            <div className="container-item">
              <div id="bubble2">
                <img className="icon" src={git}></img>
                <h4>Git</h4>
              </div>

              <div className="container-image">
                <img src={milo}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
