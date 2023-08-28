import React from "react";
import video from "../src/assets/video-bg.mp4";

export const SpatialUI = () => {
  return (
    <div className="spatial-wrapper">
      <video loop autoPlay muted id="bg-video">
        <source className="spatial-container" src={video} type="video/mp4" />
      </video>
      <div className="spatial-wrapper">
        <div id="uiContainer" className="spatial-container"></div>
        <div id="uiContainer" className="spatial-container"></div>
        <div id="uiContainer" className="spatial-container"></div>
        <div id="uiContainer" className="spatial-container"></div>
        <div id="uiContainer" className="spatial-container"></div>
      </div>
    </div>
  );
};
