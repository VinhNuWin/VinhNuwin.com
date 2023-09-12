import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { About } from "./About";
import ProjectImages from "./ProjectImages";
import { MiddleEarth } from "./MiddleEarth";
import { UI } from "./UI";
import { Technologies } from "./Technologies";
import { CodeWithMe } from "./CodeWithMe";
import { Contact } from "./Contact";

// import { ProjectImages } from "./ProjectImages";

function App() {
  return (
    <div className="content">
      <div id="stars" className=""></div>
      <Hero />
      <About />
      <ProjectImages />
      <Technologies />
      <CodeWithMe />
      <Contact />
    </div>
  );
}

export default App;
