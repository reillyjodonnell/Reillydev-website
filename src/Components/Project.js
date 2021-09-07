import React from "react";
import "../CSS Components/Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <div className="project-image">
        <div className="project-image-container">
          <div className="portfolio-image-filter">
            <img className="project-image-fit" src={props.projectImage} />
          </div>
        </div>
      </div>
      <div className="project-overview">
        <div className="project-title">
          <h2>{props.projectTitle}</h2>
        </div>
        <div className="project-description">
          <span>{props.projectDescription}</span>
        </div>
        <div className="project-technologies">
          <div className="list-of-technology">
            {props.technologiesIcons.map((icon, index) => {
              const text = props.technologies[index];
              return (
                <div className="technologies-icon">
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-links">
          <span>These are the links</span>
        </div>
      </div>
    </div>
  );
}
