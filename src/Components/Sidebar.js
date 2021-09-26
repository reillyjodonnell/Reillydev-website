import React from "react";
import X from "../Assets/Icons/X.svg";
import "../CSS Components/Sidebar.css";
import Moon from "../Assets/Icons/Moon.svg";
import Sun from "../Assets/Icons/Sun.svg";
import { useTheme } from "../contexts/ThemeContext";
import Satellite from "../Assets/Icons/Satellite.svg";
import Planet from "../Assets/Icons/Planet.svg";
import Comet from "../Assets/Icons/Comet.svg";
import Alien from "../Assets/Icons/Alien.svg";

export default function Sidebar({
  openNav,
  handleSideBar,
  scrollToAbout,
  scrollToBlog,
  scrollToContact,
  scrollToPortfolio,
}) {
  const { toggleDarkTheme, darkMode } = useTheme();

  function enableDarkMode() {
    toggleDarkTheme();
  }

  let navigationOptions = [
    {
      id: 1,
      name: "about",
      image: Satellite,
      alt: "satellite",
    },
    {
      id: 2,
      name: "portfolio",
      image: Planet,
      alt: "planet",
    },
    {
      id: 3,
      name: "writings",
      image: Comet,
      alt: "comet",
    },

    {
      id: 4,
      name: "contact",
      image: Alien,
      alt: "alien",
    },
  ];

  function scrollToRef(id) {
    //Close the nav bar
    handleSideBar();
    switch (id) {
      case 1:
        scrollToAbout();
        break;
      case 2:
        scrollToPortfolio();
        break;
      case 3:
        scrollToBlog();
        break;
      case 4:
        scrollToContact();
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={
        openNav && darkMode
          ? "sidebar-container"
          : openNav && !darkMode
          ? "sidebar-container-light"
          : "sidebar-container-inactive"
      }
    >
      <div
        className={openNav ? "exit-sidebar" : "exit-sidebar-inactive"}
        onClick={handleSideBar}
      >
        <img alt="x" className={openNav ? "x" : "x-inactive"} src={X} />
      </div>
      {openNav && (
        <div className="sidebar-nav">
          {navigationOptions.map((nav, key) => (
            <div
              key={key}
              onClick={() => scrollToRef(nav.id)}
              className={darkMode ? "sidebar-item" : "sidebar-item-light"}
            >
              <img alt={nav.alt} src={nav.image} />
              <span key={nav.id}>{nav.name}</span>
            </div>
          ))}

          <div
            onClick={enableDarkMode}
            className={darkMode ? "sidebar-item" : "sidebar-item-light"}
          >
            <img
              className="dark-mode-image transition"
              src={darkMode ? Sun : Moon}
              alt=""
            />
            <span>Toggle</span>
          </div>
        </div>
      )}
    </div>
  );
}
