import { useState, useEffect } from "react";
import MyIntro from "./MyIntro";
import "./App.css";
import ProjectCards from "./Projects";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Ending from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let imageUrls = [
    "https://i.postimg.cc/W1S1BXgC/IMG-6489.jpg",
    "https://i.postimg.cc/d1CkcGqC/C0-BE547-A-4-D4-B-431-A-AA6-D-CB1-DDDFA59-CB.jpg",
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="text">
          <h1> &lt;Hello World/&gt;</h1>
          <h2>My Name Is Kazuki Kagoshima</h2>
        </div>
        <img src="https://i.postimg.cc/W1S1BXgC/IMG-6489.jpg" alt="An image" />
      </div>
      <div className="pattern">
        <div className="designs-1"></div>
        <div className="designs-2"></div>
        <div className="designs-3"></div>
      </div>
      <MyIntro />
      <FrontEnd />
      <BackEnd />
      <ProjectCards />
      <Ending />
    </div>
  );
}

export default App;
