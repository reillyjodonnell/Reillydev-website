import Github from "../Assets/Icons/Github2.svg";
import React from "react";
import ExternalLink from "../Assets/Icons/ExternalLink.svg";
import "../CSS Components/Project.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Project(props) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "project" : "project-light"}>
      <div className="project-image">
        <a
          className="project-link-container"
          href={props.projectLink}
          rel="noreferrer"
          target="_blank"
        >
          <div className="project-image-container">
            <div className="portfolio-image-filter">
              <img
                className="project-image-fit"
                alt=""
                src={props.projectImage}
              />
            </div>
          </div>
        </a>
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
                <div key={index} className="technologies-icon">
                  <Icon key={index} className="dev-icon" />
                  <span>{props.technologies[index]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-links">
          <a href={props.projectLink} rel="noreferrer" target="_blank">
            <div className={darkMode ? "action-icon" : "action-icon-light"}>
              <img
                className="action-icon-img"
                alt="website redirect"
                src={ExternalLink}
              />
              <span className="action-icon-text">View Website</span>
            </div>
          </a>
          <a href={props.codeLink} target="_blank" rel="noreferrer">
            <div className={darkMode ? "action-icon" : "action-icon-light"}>
              <img
                className="action-icon-img"
                alt="the cat logo of Github"
                src={Github}
              />
              <span className="action-icon-text">View Code</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
