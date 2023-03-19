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
      <header>
        <div className="logo">
          <h1> &lt;Kazuki/&gt;</h1>
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
      </header>
      <section id="home">
        <div className="header">
          <img
            src="https://i.postimg.cc/W1S1BXgC/IMG-6489.jpg"
            alt="An image"
          />
          <div className="text">
            <h2>My Name Is Kazuki Kagoshima</h2>
            <h3>
              I'm a 24 year old Full-Stack <br />
              software developer based in Japan
            </h3>
          </div>
        </div>
      </section>
      <section id="about">
        <MyIntro />
      </section>
      <section id="skills">
        <FrontEnd />
        <BackEnd />
      </section>
      <section id="projects">
        <ProjectCards />
      </section>
      <section id="contact">
        <Ending />
      </section>
    </div>
  );
}

export default App;
