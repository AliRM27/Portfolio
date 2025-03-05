import React from "react";
import "./TimelineItem.css";

const TimelineItem = ({ age, title, items }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>{age}</h3>
        <p>{title}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
