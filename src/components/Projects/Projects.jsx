import React from "react";

import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";
import "./Projects.css";
import Project from "../Project/Project";

const Projects = () => {
  return (
    <div className="app__projects" id="projects">
      <div className="app__projects-title">
        <p style={{ fontSize: "15px", color: "rgb(123,123,123)" }}>
          Browse My Recent
        </p>
        <h1 style={{ fontSize: "50px" }}>Projects</h1>
      </div>
      <div className="app__projects-content">
        <Project
          image={img1}
          name={"GPT-5 Landing Page"}
          gitLink={"https://github.com/AliRM27/gpt5-website"}
          demoLink={"https://gpt5-landing-page.netlify.app"}
          description={
            "A landing page for GPT-5, a fictional AI model by OpenAI. The website is fully responsive and built using React and Tailwind CSS."
          }
          stack={"React, Tailwind"}
        />
        <Project
          image={img2}
          name={"Restaurant"}
          gitLink={"https://github.com/AliRM27/gericht-restaurant"}
          demoLink={"https://gericht-restaurant-am.netlify.app"}
          description={
            "A restaurant website with a modern design and smooth animations. The website is fully responsive and built using React and Tailwind CSS. Key features include a menu, contact form, and a gallery."
          }
          stack={"React, Tailwind"}
        />
        <Project
          image={img3}
          name={"Movie Finder"}
          gitLink={"https://github.com/AliRM27/Movie-finder"}
          demoLink={"https://movie-finder-am.netlify.app"}
          description={
            "A movie finder app that uses the RapidAPI to search for movies. The app is built using React and Tailwind CSS."
          }
          stack={"React, Tailwind, Api"}
        />
      </div>
    </div>
  );
};

export default Projects;
