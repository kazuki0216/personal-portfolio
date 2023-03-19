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
        <div>
          <h3>Back-End Experience</h3>
          <ul>
            <li>TypeScript</li>
            <li>Express/Node</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="database">
          <h3>Database</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>Mongo DB</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BackEnd;
