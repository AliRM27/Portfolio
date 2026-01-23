import React from "react";

import Skill from "../Skill/Skill.jsx";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend</h2>
            <div className="article-container">
              <Skill name={"HTML / CSS"} />
              <Skill name={"JavaScript"} />
              <Skill name={"TypeScript"} />
              <Skill name={"React"} />
              <Skill name={"React Native"} />
              <Skill name={"Angular"} />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend & Tools</h2>
            <div className="article-container">
              <Skill name={"Node.js"} />
              <Skill name={"Express.js"} />
              <Skill name={"MongoDB"} />
              <Skill name={"Python / Django"} />
              <Skill name={"Java"} />
              <Skill name={"Git / GitHub"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
