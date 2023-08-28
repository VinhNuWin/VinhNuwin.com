import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Stack } from "./Stack";
import { TechSkills } from "./TechSkills";
// import { Test } from "./Test";

export const Apple = () => {
  const { ref: spatialRef, inView: spatialVisible } = useInView({
    threshold: [0.7],
  });

  const { ref: closingRef, inView: stopVisible } = useInView({
    threshold: [0.7],
  });

  return (
    <div className="apple-wrapper" ref={closingRef}>
      <div id="stars2" className=""></div>
      <div>
        <div className="apple-container" ref={spatialRef}></div>
        <div className="sticky">
          <div className={spatialVisible ? "animateSticky" : ""}>
            <div className={stopVisible ? "closingScene" : ""}>
              {spatialVisible ? <TechSkills /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
