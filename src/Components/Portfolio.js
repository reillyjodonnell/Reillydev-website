import React from "react";
import Planet from "../Assets/Icons/Planet.svg";
import Memesfr from "../Assets/Screenshots/Desktop.png";
import "../CSS Components/Portfolio.css";
import ReactIcon from "../Assets/Icons/React.svg";
import JavaScript from "../Assets/Icons/JavaScript.svg";
import MaterialUI from "../Assets/Icons/MaterialUI.svg";
import Jest from "../Assets/Icons/Jest.svg";
import Firebase from "../Assets/Icons/Firebase.svg";
import Project from "./Project";

export default function Portfolio({ darkMode }) {
  return (
    <>
      <section id="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header navigation-header">
            <img src={Planet} alt="A picture of a planet" />

            <h1>Here's What I've Worked On</h1>
          </div>
          <Project
            projectImage={Memesfr}
            projectTitle="Memesfr"
            projectDescription="A full stack social media application that allows users to
                  share memes within the community. Users can post, like, and
                  favorite memes."
            technologies={[
              "React",
              "Firebase",
              "JavaScript",
              "Material-UI",
              "CSS",
            ]}
            technologiesIcons={[
              ReactIcon,
              Firebase,
              JavaScript,
              MaterialUI,
              Jest,
            ]}
          />
        </div>
      </section>
    </>
  );
}
