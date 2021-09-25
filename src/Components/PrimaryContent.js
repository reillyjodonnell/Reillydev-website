import React, { useRef } from "react";
import "../CSS Components/PrimaryContent.css";
import Home from "./Cards/HomeCard";
import About from "./About";
import Card from "./Cards/Card";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import { useTheme } from "../contexts/ThemeContext";

export default function PrimaryContent() {
  const { darkMode } = useTheme();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToPortfolio() {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToBlog() {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
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
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
        >
          <Home />
        </Card>
      </div>
      <div className="about-container" ref={aboutRef}>
        <About />
      </div>
      <div className="about-container" ref={portfolioRef}>
        <Portfolio darkMode={darkMode} />
      </div>
      <div className="stars" />
      <div className="skills-container" ref={blogRef}>
        <Blog darkMode={darkMode} />
      </div>
      <div className="skills-container" ref={contactRef}>
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}
