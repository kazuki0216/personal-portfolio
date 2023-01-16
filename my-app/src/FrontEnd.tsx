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
        <div className="front" data-aos="fade-in">
          <h2>Programming Languages and Skills</h2>
          <h3>Front-End Experience</h3>
        </div>
        <ul>
          <li data-aos="fade-right">HTML/CSS</li>
          <li data-aos="fade-right">JavaScript</li>
          <li data-aos="fade-right">TypeScript</li>
          <li data-aos="fade-right">React</li>
        </ul>
        <div className="designs-10"></div>
        <div className="designs-11"></div>
      </div>
    </>
  );
};

export default FrontEnd;
