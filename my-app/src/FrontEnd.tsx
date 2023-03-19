import { useEffect } from "react";
import "./Languages.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FrontEnd = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="FrontEnd">
        <div className="front">
          <h2>Programming Languages and Skills</h2>
          <h3>Front-End Experience</h3>
        </div>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
      </div>
    </>
  );
};

export default FrontEnd;
