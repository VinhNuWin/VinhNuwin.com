import React, { Component, useEffect } from "react";
import { Test } from "./assets/lotties/test";
import { motion } from "framer-motion";
import { scrollVariants } from "./variants/containerVariants.jsx";

class ImageTrack extends Component {
  constructor(props) {
    super(props);

    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };

    this.imgRef = null;
    this.setImgRef = (element) => {
      this.imgRef = element;
    };
  }

  componentDidMount() {
    // useEffect(() => {
    //   if (this.cbRef.current) {
    //     console.log("element is loaded:", this.cbRef.current);
    //   }
    // }, []);

    window.onmousedown = (e) => {
      this.cbRef.dataset.mouseDownAt = e.clientX;
      console.log(this.cbRef.dataset);
      console.log(this.imgRef);
    };

    window.ontouchstart = (e) => e.touches[0];

    window.onmouseup = (e) => {
      this.cbRef.dataset.mouseDownAt = "0";
      this.cbRef.dataset.prevPercentage = this.cbRef.dataset.percentage;
      this.cbRef.dataset.mouseUpAt = e.clientX;
      console.log(this.cbRef.dataset.mouseDownAt);
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

      this.imgRef.animate(
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
        <motion.h3 className="stack-header-h1" variants={scrollVariants}>
          Works
        </motion.h3>
        <div
          id="image-track"
          data-mouse-down-at="0"
          data-prev-percentage="0"
          ref={this.setCbRef}
        >
          <img
            id="cat"
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          {/* <img
            id="dv"
            className="image"
            src="/src/assets/dv.png"
            draggable="false"
            ref={this.setImgRef}
          /> */}
          {/* <img
            id="cat"
            className="image"
            src="/src/assets/brawlStats.png"
            draggable="false"
            // ref={this.setImgRef}
            ref={(ref) => (inputRef.current.email = ref)}
          />
          <img
            id="strapple"
            className="image"
            src="/src/assets/strapple.png"
            draggable="false"
            // ref={this.setImgRef}
            ref={(ref) => (inputRef.current.email = ref)}
          />
          <img
            id="tactoe"
            className="image"
            src="/src/assets/tactactoe.png"
            draggable="false"
            // ref={this.setImgRef}
            ref={(ref) => (inputRef.current.email = ref)}
          />
          <img
            id="hawaii"
            className="image"
            src="/src/assets/hawaii-nail-and-spa.png"
            draggable="false"
            // ref={this.setImgRef}
            ref={(ref) => (inputRef.current.email = ref)}
          />
          <img
            id="weather"
            className="image"
            src="/src/assets/futur.jpg"
            draggable="false"
            // ref={this.setImgRef}
            ref={(ref) => (inputRef.current.email = ref)}
          /> */}
        </div>
      </div>
    );
  }
}

export default ImageTrack;
