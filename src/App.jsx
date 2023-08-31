import { useState } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { About } from "./About";

function App() {
  return (
    <div className="content">
      <div id="stars" className=""></div>
      <Hero />
      <About />
      {/* <Test /> */}
      {/* <SpatialUI /> */}
      {/* <Scroll /> */}
    </div>
  );
}

export default App;
