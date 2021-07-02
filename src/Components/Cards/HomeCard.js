import React, { useState, useEffect } from "react";
import Vulcan from "../../Assets/Icons/Vulcan.svg";
import Placeholder from "../../Assets/Icons/Placeholder.svg";
import "../../CSS Components/Home.css";
import ROIcon from "../../Assets/Icons/RO_icon.svg";
import Typewriter from "typewriter-effect";
import Space from "../../Assets/Space.svg";
import Space2 from "../../Assets/Rocket.svg";
import { useTheme } from "../../contexts/ThemeContext";

export default function HomeCard(props) {
  const [descriptorIndx, changeDescriptorIndx] = useState(0);
  const [display, displayNextWord] = useState(false);
  const [mobile, displayMobile] = useState(false);
  const { darkMode } = useTheme();

  const description = [
    "Sci-fi fan",
    "Software Engineer",
    "JavaScript Developer",
    "Programmer",
    "React Developer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      let x = window.innerWidth;
      if (x <= 1300) {
        displayMobile(true);
      } else displayMobile(false);

      let index = descriptorIndx;
      changeDescriptorIndx(index + 1);
      displayNextWord((prevState) => !prevState);
    }, 4000);
    return () => clearInterval(timer);
  });
  let descriptorText = description[descriptorIndx % description.length];

  return (
    <>
      <div className="main-card-body">
        <div className="greeting">
          <div className="greeting-intro">
            <div
              className={
                darkMode
                  ? "greeting-intro-text dark transition"
                  : "greeting-intro-text transition"
              }
            >
              <h2>Hey!</h2>
              <h2 className="wave"> 👋🏼</h2>
            </div>
            <div
              className={
                darkMode
                  ? "greeting-intro-name-text dark transition"
                  : "greeting-intro-name-text transition"
              }
            >
              <h2>I'm Reilly O'Donnell </h2>
            </div>
          </div>
          <div
            className={
              darkMode
                ? "greeting-profession-text transition dark "
                : "greeting-profession-text transition"
            }
          >
            <Typewriter
              options={{
                strings: description,
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                wrapperClassName: "typewriter-style professions",
              }}
            />
          </div>
        </div>
        <div className="main-card-abstract-image">
          {darkMode ? (
            <img className="abstract-image" src={Space} />
          ) : (
            <img className="abstract-image" src={Space2} />
          )}
        </div>
      </div>
    </>
  );
}
