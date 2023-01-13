import { useEffect, useState } from "react";

const ProjectCards = () => {
  return (
    <>
      <h2>Projects that I have created</h2>
      <div className="project-container">
        <div className="project1">
          <h3 className="project-title">Sportify</h3>
          <img src="" alt="" />
          <h4>
            An app that generates random workout for users that will allow them
            to spice up their work out regime!
          </h4>
        </div>
        <div className="project2">
          <h3 className="project-title">Alternatives</h3>
          <img src="" alt="" />
          <h4>
            An app that allows users to visualize how much healthy food they are
            able to consume by setting their own calorie goal, and selecting
            fruits until they reach their threshold!
          </h4>
        </div>
        <div className="project3">
          <h3 className="project-title">Tokyo Noire</h3>
          <img src="" alt="" />
          <h4>
            A geo-location story based web app that allows users to create their
            own story and players to explore the world!
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
