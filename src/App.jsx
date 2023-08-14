import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Scroll } from "./Scroll";
import { Process } from "./Process";
import { WhatWeBuild } from "./WhatWeBuild";
import { TechSkills } from "./TechSkills";

function App() {
  return (
    <div className="content">
      <Hero />
      <Scroll />
      <TechSkills />
      <Process />
      <WhatWeBuild />
    </div>
  );
}

export default App;
