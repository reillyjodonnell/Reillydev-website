import React, { useState, useEffect } from "react";
import "../../CSS Components/Home.css";
import Typewriter from "typewriter-effect";
import Space from "../../Assets/Space.svg";
import Space2 from "../../Assets/Rocket.svg";
import { useTheme } from "../../contexts/ThemeContext";

export default function HomeCard(props) {
  const [descriptorIndx, changeDescriptorIndx] = useState(0);
  const [display, displayNextWord] = useState(false);
  const [mobile, displayMobile] = useState(false);
  const { darkMode } = useTheme();

  // const description = [
  //   "Sci-fi fan",
  //   "Software Engineer",
  //   "JavaScript Developer",
  //   "Programmer",
  //   "React Developer",
  // ];
  const description = ["Software Engineer", "JavaScript Developer"];

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
          <div
            className={
              darkMode
                ? "greeting-intro-text dark transition"
                : "greeting-intro-text transition"
            }
          >
            <span className="wave"> 👋🏼 </span>
            <span className="my-name-is">My name is</span>
          </div>
          <div
            className={
              darkMode
                ? "greeting-intro-name-text dark transition"
                : "greeting-intro-name-text transition"
            }
          >
            <h2 className="name">Reilly O'Donnell </h2>
          </div>
          <div
            className={
              darkMode
                ? "greeting-intro-name-text transition dark "
                : "greeting-intro-name-text transition"
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
          <div
            className={
              darkMode
                ? "greeting-subtext transition dark "
                : "greeting-subtext transition"
            }
          >
            <p>
              I'm a software engineer Lucas ipsum dolor sit amet luke calrissian
              thrawn k-3po mon leia skywalker biggs yoda leia. Darth binks boba
              dooku jango lobot solo leia fett. R2-d2{" "}
            </p>
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
