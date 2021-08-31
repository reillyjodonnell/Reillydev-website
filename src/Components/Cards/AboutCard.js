import React, { useState, useEffect } from "react";
import Reilly from "../../Assets/Headshot.jpg";
import "../../CSS Components/Home.css";
import "../../CSS Components/Cards/AboutCard.css";
import { useTheme } from "../../contexts/ThemeContext";

export default function HomeCard(props) {
  const { darkMode } = useTheme();

  return (
    <>
      <div className="navigation-header">
        <h1>About Me</h1>
      </div>

      <div className="main-card-body about-background">
        <div className="greeting">
          <div className="greeting-intro">
            <div className="greeting-intro-text dark transition"></div>
            <div className="about-text dark transition">
              <h2>Hello! My name is Reilly O'Donnell </h2>
              <br />

              <span>
                I'm a software engineer and React Developer from Fredericksburg,
                VA.{" "}
              </span>
              <br />
              <br />
              <span>
                I love spending time with my family and spending time outdoors.
                I'd like to think I have a green thumb 🌱
              </span>
              <br />
              <br />
              <span>
                I genuinely have a passion for people and always enjoy meeting
                new people!
              </span>
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
        <div className="about-card-image">
          <img src={Reilly} />
        </div>
      </div>
    </>
  );
}
