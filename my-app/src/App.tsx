import React from "react";
import MyIntro from "./MyIntro";
import "./App.css";
import ProjectCards from "./Projects";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Ending from "./Footer";

function App() {
  return (
    <div className="App">
      <h1> Thanks For Stopping BY</h1>
      <MyIntro />
      <FrontEnd />
      <BackEnd />
      <ProjectCards />
      <Ending />
    </div>
  );
}

export default App;
