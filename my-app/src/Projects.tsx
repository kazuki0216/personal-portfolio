import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Project.css";

const ProjectCards = () => {
  return (
    <>
      <div className="Project">
        <h2 className="project-title">Coding Projects</h2>
        <h3 className="project-title">Tokyo Noire</h3>
        <div className="project1">
          <Container className="1">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/V704EDIsMFU"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
          <div className="info1">
            <h4>
              A Geo-location story based web app that allows story tellers to
              create their own stories and players to go out and explore the
              world!
            </h4>
            <ul>
              <h5>As a Backend-Lead: </h5>
              <li>
                Implemented Node, Express, Mongo DB atlas in the back-end.
              </li>
              <li>Fully designed API for client to interact with server.</li>
              <li>
                Integrate Cloudinary to handle media related uploads within the
                game.{" "}
              </li>
            </ul>
          </div>
        </div>
        <h3 className="project-title">Sportify</h3>
        <div className="project2">
          <Container className="2">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/W82qPDkLn5U"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
          <div className="info2">
            <h4>
              A team project that generates random workouts for users that will
              allow them to spice up their work out regime!
            </h4>
            <ul>
              <li>Implement backend using Node and Express.</li>
              <li>
                Configured postgreSQL for data storage and integrate Knex.js.
              </li>
              <li>
                Designed Restful API to connect client-side code and server-side
                code
              </li>
            </ul>
          </div>
        </div>
        <h3 className="project-title">Alternatives</h3>
        <div className="project3">
          <div className="ratio ratio-16x9">
            <Container className="3">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/1nZ_d20yrqo"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
          </div>
          <div className="info3">
            <h4>
              A full-stack Typescript/React app that allows users to visualize
              how much healthy food they are able to consume by setting their
              own calorie goals, and selecting fruits until they reach their
              threshold!
            </h4>
            <ul>
              <li>
                Integrate Firebase and Firestore for users authentication.
              </li>
              <li>Utilized TypeScript and React for the front-end.</li>
              <li>Used Node and Express for the back-end.</li>
              <li>Utilize Mongo DB to integrate the full MERN stack.</li>
              <li>Third Party API fetch to retrieve food information.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
