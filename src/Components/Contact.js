import React from "react";
import "../CSS Components/Contact.css";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/ThemeContext";
import Alien from "../Assets/Icons/Alien.svg";

export default function Skills() {
  const { darkMode } = useTheme();
  return (
    <>
      <div id="contact">
        <div
          className={
            darkMode ? "about-container-dark" : "about-container-light"
          }
        >
          <div className="about-background">
            <div
              className={
                darkMode
                  ? "about-text dark transition"
                  : "about-text transition"
              }
            >
              <div className="navigation-header">
                <img alt="alien" src={Alien} />
                <h1>Contact Me</h1>
              </div>

              <br />
              <div className="social-list">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/reillyjodonnell"
                >
                  <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/reillyjodonnell/"
                >
                  <FontAwesomeIcon className="fa-lg" icon={faGithub} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/reillyjodonnell/"
                >
                  <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              darkMode
                ? "greeting-profession-text transition dark "
                : "greeting-profession-text transition"
            }
          ></div>
        </div>
        <div className="gradient">
          <div className="about-card-image"></div>
        </div>
      </div>
    </>
  );
}
