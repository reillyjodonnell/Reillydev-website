import React from "react";
import "../CSS Components/Contact.css";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div
      style={{
        width: "fit-content",
        height: "100%",
        position: "absolute",
        backgroundColor: "#222222ad",
        top: 0,
        zIndex: 100,
        padding: ".25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        className="social-list"
      >
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
          href="https://www.linkedin.com/in/reillyjodonnell/"
        >
          <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}
