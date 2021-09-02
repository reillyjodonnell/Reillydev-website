import React from "react";
import Planet from "../Assets/Icons/Planet.svg";
import Memesfr from "../Assets/Screenshots/Desktop.png";
import "../CSS Components/Portfolio.css";
import Firebase from "../Assets/Icons/Firebase.svg";

export default function Portfolio({ darkMode }) {
  return (
    <>
      <section id="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <img src={Planet} alt="A picture of a planet" />
            <h1>Here's What I've Worked On</h1>
          </div>
          <div className="project">
            <div className="project-image">
              <div className="project-image-container">
                <img className="project-image-fit" src={Memesfr} />
              </div>
            </div>
            <div className="project-overview">
              <div className="project-title">
                <h2>Memesfr</h2>
              </div>
              <div className="project-description">
                <span>
                  A full stack social media application built with React,
                  Firebase, and Material-UI.
                </span>
              </div>
              <div className="project-technologies">
                <span>These are the technologies used</span>
                <img src={Firebase} />
              </div>
              <div className="project-links">
                <span>These are the links</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={darkMode ? "about-container-dark" : "about-container-light"}
      >
        <div className="about-background">
          <div className="greeting">
            <div className="portfolio-header">
              <div
                className={
                  darkMode
                    ? "greeting-intro-text dark transition"
                    : "greeting-intro-text transition"
                }
              ></div>
              <div
                className={
                  darkMode
                    ? "about-text dark transition"
                    : "about-text transition"
                }
              >
                <div className="navigation-header">
                  <img src={Planet} />
                  <h1>Here's What I've Built:</h1>
                </div>
              </div>
            </div>
            <img />
            <div
              className={
                darkMode
                  ? "greeting-profession-text transition dark "
                  : "greeting-profession-text transition"
              }
            >
              <span>Project 1</span>
            </div>
            <img />
            <div
              className={
                darkMode
                  ? "greeting-profession-text transition dark "
                  : "greeting-profession-text transition"
              }
            >
              <span>Project 1</span>
            </div>
            <img />
            <div
              className={
                darkMode
                  ? "greeting-profession-text transition dark "
                  : "greeting-profession-text transition"
              }
            >
              <span>Project 1</span>
            </div>
          </div>
          <div className="gradient">
            <div className="about-card-image">
              <img />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
