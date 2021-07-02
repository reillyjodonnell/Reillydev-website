import React from "react";
import "../CSS Components/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-header">
        <span>Professional skills</span>
      </div>
      <div className="skills-list">
        <div className="skills-group">
          <img />
          <span>Title</span>
          <span>description</span>
        </div>
        <div className="skills-group">
          <img />
          <span>Title</span>
          <span>description</span>
        </div>
        <div className="skills-group">
          <img />
          <span>Title</span>
          <span>description</span>
        </div>
        <div className="skills-group">
          <img />
          <span>Title</span>
          <span>description</span>
        </div>
      </div>
    </section>
  );
}
