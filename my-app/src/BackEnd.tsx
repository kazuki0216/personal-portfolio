import { useEffect } from "react";
import "./Languages.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BackEnd = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="BackEnd">
        <h3 data-aos="fade-in">Back-End Experience</h3>
        <ul>
          <li data-aos="fade-left">TypeScript</li>
          <li data-aos="fade-left">Express/Node</li>
          <li data-aos="fade-left">Java</li>
        </ul>
        <div>
          <h3 data-aos="fade-in">Database</h3>
          <ul>
            <li data-aos="fade-right">PostgreSQL</li>
            <li data-aos="fade-left">Mongo DB</li>
          </ul>
        </div>
        <div className="designs-12"></div>
      </div>
    </>
  );
};

export default BackEnd;
