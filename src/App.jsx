import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { About } from "./About";
import ProjectImages from "./ProjectImages";
import { MiddleEarth } from "./MiddleEarth";
import { UI } from "./UI";

// import { ProjectImages } from "./ProjectImages";

function App() {
  return (
    <div className="content">
      <div id="stars" className=""></div>
      <Hero />
      <About />
      {/* <MiddleEarth /> */}
      {/* <UI /> */}
      {/* <ProjectImages /> */}
      {/* <Test /> */}
      {/* <SpatialUI /> */}
      {/* <Scroll /> */}
    </div>
  );
}

export default App;
