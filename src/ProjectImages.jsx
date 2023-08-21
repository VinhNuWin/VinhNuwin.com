import React, { Component } from "react";
import { Test } from "./assets/lotties/test";

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
    window.onmousedown = (e) => {
      this.cbRef.dataset.mouseDownAt = e.clientX;
      console.log(this.cbRef);
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

      // for (const image of this.cbRef.img.class) {
      this.imgRef.current.style.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );

      // this.imgRef.current.animate(
      //   {
      //     objectPosition: `${100 + nextPercentage}% center`,
      //   },
      //   { duration: 1200, fill: "forwards" }
      // );
    };
    // };

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }

  render() {
    return (
      <div>
        <div
          id="image-track"
          data-mouse-down-at="0"
          data-prev-percentage="0"
          ref={this.setCbRef}
        >
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
          <img
            className="image"
            src="/src/assets/cat.png"
            draggable="false"
            ref={this.setImgRef}
          />
        </div>
      </div>
    );
  }
}

export default ImageTrack;
