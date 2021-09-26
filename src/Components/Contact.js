import React from "react";
import "../CSS Components/Contact.css";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alien from "../Assets/Icons/Alien.svg";

export default function Skills() {
  return (
    <>
      <div id="contact">
        <div className="portfolio-container">
          <div className="blog-header">
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
          </div>
        </div>
      </div>
    </>
  );
}
