import Github from "../Assets/Icons/Github2.svg";
import React from "react";
import ExternalLink from "../Assets/Icons/ExternalLink.svg";
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
            {props.technologiesIcons.map((Icon, index) => {
              //const text = props.technologies[index];
              return (
                <div className="technologies-icon">
                  <Icon className="dev-icon" />
                  <span>{props.technologies[index]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-links">
          <a href="https://memesfr.com" target="_blank">
            <div className="action-icon">
              <img src={ExternalLink} />
              <span>View Website</span>
            </div>
          </a>
          <a
            href="https://github.com/reillyjodonnell/Memesfr_production"
            target="_blank"
          >
            <div className="action-icon">
              <img src={Github} />
              <span>View Code</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
