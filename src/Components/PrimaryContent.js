import React, { useEffect, useState } from "react";
import "../CSS Components/PrimaryContent.css";
import Home from "./Cards/HomeCard";
import About from "./About";
import Portfolio from "./Cards/PortfolioCard";
import Card from "./Cards/Card";
import { useTheme } from "../contexts/ThemeContext";

export default function PrimaryContent() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [descriptorIndx, changeDescriptorIndx] = useState(0);
  const [display, displayNextWord] = useState(false);
  const [mobile, displayMobile] = useState(false);

  const { darkMode } = useTheme();

  const description = ["Programmer", "Sci-fi fan", "Thinker"];

  /*useEffect(() => {
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
  */

  const updateCard = () => {
    setActiveScreen(activeScreen + 1);
  };

  const ActiveScreen = () => {
    switch (activeScreen) {
      case 0:
        return (
          <Home
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
      case 1:
        return <About />;
      case 2:
        return <Portfolio />;
      case 3:
        return <span>Skills</span>;
      case 4:
        return <span>bob's Law Blog of Law</span>;
    }
  };

  return (
    <>
      <div className="stars"> </div>
      <div className="container">
        <Card
          id="home"
          content="home-content"
          setActiveScreen={setActiveScreen}
        >
          <ActiveScreen />
        </Card>
      </div>
      <>
        <About />
        <Portfolio />
      </>
    </>
  );
}
