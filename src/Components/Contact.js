import React from "react";
import About from "./About";
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
                <img src={Alien} />
                <h1>Contact Me</h1>
              </div>

              <br />
              <div className="social-list">
                <FontAwesomeIcon
                  className="fa-2x hover:text-red-500"
                  icon={faTwitter}
                />
                <FontAwesomeIcon className="fa-2x" icon={faGithub} />
                <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
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
