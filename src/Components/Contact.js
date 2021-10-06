import React from "react";
import "../CSS Components/Contact.css";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alien from "../Assets/Icons/Alien.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <>
      <div id="contact">
        <div className="portfolio-container">
          <div className={darkMode ? "blog-header" : "blog-header-light"}>
            <img alt="alien" src={Alien} />
            <h1>Contact Me</h1>
          </div>
          <div className="social-list">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/reillyjodonnell"
            >
              <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/reillyjodonnell/"
            >
              <FontAwesomeIcon className="fa-2x" icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/reillyjodonnell/"
            >
              <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:odonnell.reilly.j@gmail.com.com?subjectThe%20Force%20is%20Strong%20With%20This%20One"
            >
              <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
