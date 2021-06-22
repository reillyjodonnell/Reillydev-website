import React, { useEffect, useState, useRef } from "react";
import "../CSS Components/PrimaryContent.css";
import Home from "./Cards/HomeCard";
import Portfolio from "./Cards/PortfolioCard";
import Skills from "./Cards/SkillsCard";
import HireMe from "./Cards/HireMeCard";
import Header from "./Header";
import Down from "./ChevronDown";

export default function PrimaryContent() {
  const [activeScreen, setActiveScreen] = useState(0);

  const [descriptorIndx, changeDescriptorIndx] = useState(0);
  const [darkMode, enableDarkMode] = useState(false);
  const [display, displayNextWord] = useState(false);
  const [mobile, displayMobile] = useState(false);

  const description = ["Programmer", "Sci-fi fan", "Thinker"];

  useEffect(() => {
    console.log(activeScreen);

    const timer = setInterval(() => {
      let x = window.innerWidth;
      if (x <= 1300) {
        displayMobile(true);
      } else displayMobile(false);

      let index = descriptorIndx;
      changeDescriptorIndx(index + 1);
      displayNextWord(!display);
    }, 5000);
    return () => clearInterval(timer);
  });

  const updateCard = () => {
    setActiveScreen(activeScreen + 1);
  };

  const toggleDarkMode = () => {
    enableDarkMode(!darkMode);
  };

  const portfolioRef = useRef(null);

  const scrollToDiv = () => portfolioRef.current.scrollIntoView();

  return (
    <>
      <div className="container">
        <section id="home" className="main-content">
          <div
            className={
              darkMode ? "main-card-dark transition" : "main-card transition"
            }
          >
            <Header
              scrollToDiv={scrollToDiv}
              style={{ position: "sticky" }}
              setActiveScreen={setActiveScreen}
              darkMode={darkMode}
              mobile={mobile}
              toggleDarkMode={toggleDarkMode}
            />
            <Home
              setActiveScreen={setActiveScreen}
              activeScreen={activeScreen}
              darkMode={darkMode}
            />
          </div>
          <Down />
        </section>
        <section id="portfolio" className="main-content">
          <div
            className={
              darkMode ? "main-card-dark transition" : "main-card transition"
            }
          >
            <Header
              style={{ position: "sticky" }}
              setActiveScreen={setActiveScreen}
              darkMode={darkMode}
              mobile={mobile}
              toggleDarkMode={toggleDarkMode}
            />
            <Portfolio
              setActiveScreen={setActiveScreen}
              activeScreen={activeScreen}
              darkMode={darkMode}
            />
          </div>
          <Down />
        </section>
        <section id="skills" className="main-content">
          <div
            className={
              darkMode ? "main-card-dark transition" : "main-card transition"
            }
          >
            <Header
              style={{ position: "sticky" }}
              setActiveScreen={setActiveScreen}
              darkMode={darkMode}
              mobile={mobile}
              toggleDarkMode={toggleDarkMode}
            />
            <Skills
              setActiveScreen={setActiveScreen}
              activeScreen={activeScreen}
              darkMode={darkMode}
            />
          </div>
          <Down />
        </section>
        <section id="hire-me" className="main-content">
          <div
            className={
              darkMode ? "main-card-dark transition" : "main-card transition"
            }
          >
            <Header
              style={{ position: "sticky" }}
              setActiveScreen={setActiveScreen}
              darkMode={darkMode}
              mobile={mobile}
              toggleDarkMode={toggleDarkMode}
            />
            <HireMe
              setActiveScreen={setActiveScreen}
              activeScreen={activeScreen}
              darkMode={darkMode}
            />
          </div>
          <Down />
        </section>
      </div>
    </>
  );
}
