import React, { useRef, useState } from "react";
import "../CSS Components/PrimaryContent.css";
import Home from "./Cards/HomeCard";
import About from "./About";
import Card from "./Cards/Card";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import { useTheme } from "../contexts/ThemeContext";
import Sidebar from "./Sidebar";

export default function PrimaryContent() {
  const { darkMode } = useTheme();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  const [openNav, setOpenNav] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  function handleSideBar() {
    console.log("Test");
    if (hasOpened === false) {
      setHasOpened(true);
    }
    setOpenNav((prevState) => !prevState);
  }

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
      {hasOpened && (
        <Sidebar
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
          scrollToBlog={scrollToBlog}
          scrollToContact={scrollToContact}
          openNav={openNav}
          handleSideBar={handleSideBar}
        />
      )}
      <div className="container">
        <Card
          handleSideBar={handleSideBar}
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
      <br />
      <br />
      <div className="tagline">
        <span>Made with ❤️</span>
        <span style={{ paddingLeft: "10px" }}>by Reilly</span>
      </div>
    </>
  );
}
