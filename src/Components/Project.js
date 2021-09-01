import React from "react";
import Aron from "../Assets/ARON.png";
import "../CSS Components/Project.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section
      id="portfolio"
      className={darkMode ? "main-content dark" : "main-content light"}
    >
      <div className="project-container">
        <div className="project-preview project1">
          <div className="project-preview-image-container">
            <img className="project-preview-image" src={Aron} />
          </div>
          <div className="project-title">
            <span>Project1</span>
          </div>
          <div className="project-description">
            <span>Project description</span>
          </div>
        </div>
      </div>
    </section>
  );
}