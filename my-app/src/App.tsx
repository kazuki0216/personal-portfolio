import React, { useState, useRef, useEffect } from "react";
import MyIntro from "./MyIntro";
import "./App.css";
import ProjectCards from "./Projects";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Ending from "./Footer";

function App() {
  let imageUrls = [
    "https://i.postimg.cc/W1S1BXgC/IMG-6489.jpg",
    "https://i.postimg.cc/d1CkcGqC/C0-BE547-A-4-D4-B-431-A-AA6-D-CB1-DDDFA59-CB.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImage(
          currentImage === imageUrls[0] ? imageUrls[1] : imageUrls[0]
        );
        setFadeIn(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

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
      <ProjectCards />
      <FrontEnd />
      <BackEnd />
      <Ending />
    </div>
  );
}

export default App;
