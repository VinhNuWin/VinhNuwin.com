import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Scroll } from "./Scroll";
import { Process } from "./Process";
import { WhatWeBuild } from "./WhatWeBuild";
import { TechSkills } from "./TechSkills";
import { Stack } from "./Stack";
import { Projects } from "./Projects";
import ProjectImages from "./ProjectImages";
import { Weather } from "./Weather";
import { Apple } from "./Apple";
import { Test } from "./Test";
import { SpatialUI } from "./spatialUI";

function App() {
  return (
    <div className="content">
      <div id="stars" className=""></div>

      <Hero />
      <Apple />
      <Test />
      <SpatialUI />
      <Scroll />
      {/* <ProjectImages /> */}
      {/* <Projects /> */}
      {/* <Stack /> */}

      {/* <Weather /> */}
      {/* <Scroll /> */}
      {/* <TechSkills /> */}

      {/* <WhatWeBuild /> */}
    </div>
  );
}

export default App;
