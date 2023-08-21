import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Scroll } from "./Scroll";
import { Process } from "./Process";
import { WhatWeBuild } from "./WhatWeBuild";
import { TechSkills } from "./TechSkills";
import { Stack } from "./Stack";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="content">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Hero />
      <Scroll />
      <TechSkills />
      <Stack />
      <Projects />
      {/* <ImageTrack /> */}
      <WhatWeBuild />
    </div>
  );
}

export default App;
