import { useEffect, useRef } from "react";
import "./App.css";
import MyIntro from "./MyIntro";
import ProjectCards from "./Projects";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Ending from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div id="home">
        <div className="header">
          <img
            src="https://i.postimg.cc/W1S1BXgC/IMG-6489.jpg"
            alt="An image"
          />
          <div className="text">
            <h1> &lt;Hello World/&gt;</h1>
            <h2>My Name Is Kazuki Kagoshima</h2>
          </div>
        </div>
      </div>
      <div id="about">
        <MyIntro />
      </div>
      <div id="skills">
        <FrontEnd />
        <BackEnd />
      </div>
      <div id="projects">
        <ProjectCards />
      </div>
      <div id="contact">
        <Ending />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
