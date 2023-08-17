import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Scroll } from "./Scroll";
import { Process } from "./Process";
import { WhatWeBuild } from "./WhatWeBuild";
import { TechSkills } from "./TechSkills";
import { Stack } from "./Stack";

function App() {
  return (
    <div className="content">
      <Hero />
      <Scroll />
      <TechSkills />
      {/* <Process /> */}
      <WhatWeBuild />
      <Stack />
    </div>
  );
}

export default App;
