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
      <Hero />
      <Scroll />
      <TechSkills />
      <Projects />
      <WhatWeBuild />
      <Stack />
    </div>
  );
}

export default App;
