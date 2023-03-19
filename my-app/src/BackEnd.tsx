import { useEffect } from "react";
import "./Languages.css";
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

const BackEnd = () => {
  return (
    <>
      <div className="BackEnd">
        <div>
          <h3>Back-End Experience</h3>
          <ul>
            <li>
              Java
              <FontAwesomeIcon icon={faJava} className="coding-icon"/>
            </li>
            <li>
              Spring/SpringBoot
              <FontAwesomeIcon icon={faServer} className="coding-icon"/>
            </li>
            <li>
              Node/Express
              <FontAwesomeIcon icon={faNode} className="coding-icon"/>
            </li>
          </ul>
        </div>
        <div className="database">
          <h3>Database</h3>
          <ul>
            <li>
              PostgreSQL <FontAwesomeIcon icon={faDatabase} className="coding-icon"/>
            </li>
            <li>
              Mongo DB <FontAwesomeIcon icon={faDatabase} className="coding-icon"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BackEnd;
