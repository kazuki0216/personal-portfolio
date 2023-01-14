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
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <Container className="1">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/W82qPDkLn5U"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
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
          </ScrollAnimation>
        </div>
        <h3 className="project-title">Alternatives</h3>
        <div className="project2">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="ratio ratio-16x9">
              <Container className="2">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/1nZ_d20yrqo"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </Container>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div className="info2">
              <h4>
                A full-stack Typescript/React app that allows users to visualize
                how much healthy food they are able to consume by setting their
                own calorie goal, and selecting fruits until they reach their
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
          </ScrollAnimation>
        </div>
        <h3 className="project-title">Tokyo Noire</h3>
        <div className="project3">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <Container className="3">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/V704EDIsMFU"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div className="info3">
              <h4>
                A Geo-location story based web app that allows users to create
                their own story and players to explore the world!
              </h4>
              <ul>
                <li>
                  Implemented Node, Express, Mongo DB atlas in the back-end.
                </li>
                <li>Fully designed API for client to interact with server.</li>
                <li>
                  Integrate Cloudinary to handle media related uploads within
                  the game.{" "}
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
