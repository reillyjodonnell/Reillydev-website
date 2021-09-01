import React, { useRef, useState } from "react";
import "../CSS Components/PrimaryContent.css";
import Home from "./Cards/HomeCard";
import About from "./About";
import Portfolio from "./Cards/PortfolioCard";
import Card from "./Cards/Card";
import { useTheme } from "../contexts/ThemeContext";

export default function PrimaryContent() {
  const { darkMode } = useTheme();
  const description = ["Programmer", "Sci-fi fan", "Thinker"];
  const aboutRef = useRef();
  const portfolioRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToPortfolio() {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="stars"> </div>
      <div className="container">
        <Card
          id="home"
          content="home-content"
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
        >
          <Home />
        </Card>
      </div>
      <>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
      </>
    </>
  );
}
