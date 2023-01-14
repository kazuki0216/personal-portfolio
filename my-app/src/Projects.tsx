import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const ProjectCards = () => {
  const alternativesArray = [
    "https://i.postimg.cc/GmZNw9Dy/Screenshot-2023-01-14-at-13-19-34.png",
    ,
    "https://i.postimg.cc/PqMqFCVt/Screenshot-2023-01-14-at-13-15-15.png",
  ];
  return (
    <>
      <div className="Project">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true} duration={2}>
          <h2 className="project-title">Coding Projects</h2>
        </ScrollAnimation>
        <h3 className="project-title">Sportify</h3>
        <div className="project1">
          <Container>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/W82qPDkLn5U"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
          <div className="info1">
            <h4>
              An app that generates random workout for users that will allow
              them to spice up their work out regime!
            </h4>
            <ul>
              <li>Worked in the backend using Node and Express.</li>
              <li>Configured postgreSQL for data storage.</li>
              <li>
                Designed API to connect client-side code and server-side code
              </li>
            </ul>
          </div>
        </div>
        <h3 className="project-title">Alternatives</h3>
        <div className="project2">
          <div className="ratio ratio-16x9">
            <Container>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/1nZ_d20yrqo"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
          </div>
          <div className="info2">
            <h4>
              An app that allows users to visualize how much healthy food they
              are able to consume by setting their own calorie goal, and
              selecting fruits until they reach their threshold!
            </h4>
            <ul>
              <li>Worked in the backend using Node and Express.</li>
              <li>Configured postgreSQL for data storage.</li>
              <li>
                Designed API to connect client-side code and server-side code
              </li>
            </ul>
          </div>
        </div>
        <h3 className="project-title">Tokyo Noire</h3>
        <div className="project3">
          <Container>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/V704EDIsMFU"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
          <div className="info3">
            <h4>
              A geo-location story based web app that allows users to create
              their own story and players to explore the world!
            </h4>
            <ul>
              <li>Worked in the backend using Node and Express.</li>
              <li>Configured postgreSQL for data storage.</li>
              <li>
                Designed API to connect client-side code and server-side code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
