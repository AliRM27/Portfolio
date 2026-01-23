import React from "react";
import check from "../../assets/checkmark.png";

import "./Skill.css";

const Skill = ({ name }) => {
  return (
    <div className="app__skill">
      <img src={check} alt="check" />
      <div className="app__skill-content">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Skill;
