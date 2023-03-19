import { useEffect } from "react";
import "./Languages.css";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { CAlert } from "@coreui/react";

const FrontEnd = () => {
  return (
    <>
      <h2>Programming Languages and Skills</h2>
      <div className="FrontEnd">
        <div className="front">
          <h3>Front-End Experience</h3>
        </div>
        <ul>
          <li>
            HTML <FontAwesomeIcon icon={faHtml5} className="coding-icon" />
            /CSS <FontAwesomeIcon icon={faCss3} className="coding-icon" />
          </li>
          <li>
            JavaScript <FontAwesomeIcon icon={faJs} className="coding-icon" />
          </li>
          <li>
            TypeScript <FontAwesomeIcon icon={faFileCode} title="TypeScript" />
          </li>
          <li>
            React <FontAwesomeIcon icon={faReact} className="coding-icon" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FrontEnd;
