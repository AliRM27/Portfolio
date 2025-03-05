import React from "react";

import "./Project.css";

const Project = ({ image, name, gitLink, demoLink, description, stack }) => {
  return (
    <div className="app__project">
      <img src={image} alt="project" />
      <h1>{name}</h1>
      <div className="app__project-description">
        <p>{description}</p>
        <h4>{stack}</h4>
      </div>
      <div className="app__project-links">
        <button
          type="button"
          onClick={() => window.open(gitLink, "_blank", "noreferrer")}
        >
          Github
        </button>
        <button
          type="button"
          onClick={() => window.open(demoLink, "_blank", "noreferrer")}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Project;
