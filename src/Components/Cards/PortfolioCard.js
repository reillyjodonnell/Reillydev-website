import React, { useState, useEffect } from "react";
import Reilly from "../../Assets/Headshot.jpg";
import "../../CSS Components/Home.css";
import "../../CSS Components/Cards/AboutCard.css";
import { useTheme } from "../../contexts/ThemeContext";

export default function HomeCard(props) {
  const { darkMode } = useTheme();

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
            ></div>
            <div
              className={
                darkMode
                  ? "about-text dark transition"
                  : "about-text transition"
              }
            >
              <h2>Here's my latest project: </h2>
              <br />
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
        <div className="about-card-image"></div>
      </div>
    </>
  );
}