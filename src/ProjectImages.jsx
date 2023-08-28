import React, { Component, useEffect } from "react";
import { Test } from "./assets/lotties/test";
import { motion } from "framer-motion";
import { scrollVariants } from "./variants/containerVariants.jsx";
import cat from "./assets/cat.png";
import futur from "./assets/futur.jpg";
import dv from "./assets/dv-pro.png";
import tic from "./assets/TicTacToe.png";
import hawaii from "./assets/hawaii.png";
import brawl from "./assets/brawlStats.png";
import strapple from "./assets/strapley.png";

class ProjectImages extends Component {
  constructor(props) {
    super(props);

    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };

    this.catRef = null;
    this.setCatRef = (element) => {
      this.catRef = element;
    };

    this.dvRef = null;
    this.setDvRef = (element) => {
      this.dvRef = element;
    };

    this.weatherRef = null;
    this.setWeatherRef = (element) => {
      this.weatherRef = element;
    };

    this.hawaiiRef = null;
    this.setHawaiiRef = (element) => {
      this.hawaiiRef = element;
    };

    this.strappleRef = null;
    this.setStrappleRef = (element) => {
      this.strappleRef = element;
    };

    this.brawlRef = null;
    this.setBrawlRef = (element) => {
      this.brawlRef = element;
    };

    this.ticRef = null;
    this.setTicRef = (element) => {
      this.ticRef = element;
    };
  }

  componentDidMount() {
    window.onmousedown = (e) => {
      this.cbRef.dataset.mouseDownAt = e.clientX;
      // console.log(this.cbRef.dataset);
    };

    window.ontouchstart = (e) => e.touches[0];

    window.onmouseup = (e) => {
      this.cbRef.dataset.mouseDownAt = "0";
      this.cbRef.dataset.prevPercentage = this.cbRef.dataset.percentage;
      this.cbRef.dataset.mouseUpAt = e.clientX;
    };

    window.ontouchend = (e) => e.touches[0];

    window.onmousemove = (e) => {
      if (this.cbRef.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(this.cbRef.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(this.cbRef.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      this.cbRef.dataset.percentage = nextPercentage;

      this.cbRef.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      this.catRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
      this.dvRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
      this.ticRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
      this.strappleRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
      this.brawlRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
      this.hawaiiRef.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    };

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }

  render() {
    return (
      <div>
        <motion.h3 className="stack-header-h1">Works</motion.h3>
        <div
          id="image-track"
          data-mouse-down-at="0"
          data-prev-percentage="0"
          ref={this.setCbRef}
        >
          <img
            id="cat"
            className="image"
            src={cat}
            draggable="false"
            ref={this.setCatRef}
          />
          <img
            id="dv"
            className="image"
            src={dv}
            draggable="false"
            ref={this.setDvRef}
          />
          <img
            id="strapple"
            className="image"
            src="/src/assets/strapple.png"
            draggable="false"
            ref={this.setStrappleRef}
          />
          <img
            id="tactoe"
            className="image"
            src={tic}
            draggable="false"
            ref={this.setTicRef}
          />
          <img
            id="brawl"
            className="image"
            src={brawl}
            draggable="false"
            ref={this.setBrawlRef}
          />
          <img
            id="hawaii"
            className="image"
            src={hawaii}
            draggable="false"
            ref={this.setHawaiiRef}
          />
        </div>
      </div>
    );
  }
}

export default ProjectImages;
