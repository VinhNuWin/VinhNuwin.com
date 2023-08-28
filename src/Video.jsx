import React from "react";
import video from "../src/assets/video-bg.mp4";

export const Video = () => {
  return (
    <div className="spatialUI">
      <video src={video} loop autoPlay id="bg-video" />
    </div>
  );
};
