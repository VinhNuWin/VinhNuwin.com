import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Scroll } from "./Scroll";
import { Process } from "./Process";
import { WhatWeBuild } from "./WhatWeBuild";
import { TechSkills } from "./TechSkills";
import { Stack } from "./Stack";
import { Projects } from "./Projects";
import ImageTrack from "./ProjectImages";
import { Weather } from "./Weather";
import { Apple } from "./Apple";

function App() {
  return (
    <div className="content">
      <Hero />
      <Stack />
      <Apple />
      {/* <Weather /> */}
      <Scroll />
      <TechSkills />

      <Projects />
      {/* <ImageTrack /> */}
      <WhatWeBuild />
    </div>
  );
}

export default App;
