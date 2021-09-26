import React from "react";
import "../CSS Components/Header.css";
import Moon from "../Assets/Icons/Moon.svg";
import Sun from "../Assets/Icons/Sun.svg";
import MenuBar from "../Assets/Icons/MenuBar.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Header(props) {
  const { toggleDarkTheme, darkMode } = useTheme();

  let navigationOptions = [
    {
      id: 1,
      name: "about",
    },
    {
      id: 2,
      name: "portfolio",
    },
    {
      id: 3,
      name: "writings",
    },

    {
      id: 4,
      name: "contact",
    },
  ];

  function scrollToRef(id) {
    switch (id) {
      case 1:
        props.scrollToAbout();
        break;
      case 2:
        props.scrollToPortfolio();
        break;
      case 3:
        props.scrollToBlog();
        break;
      case 4:
        props.scrollToContact();
        break;
      default:
        break;
    }
  }

  function enableDarkMode() {
    toggleDarkTheme();
  }

  // Loop through the list assigning values starting at 0
  // When the number is selected send that to the state
  // Update the state and rerender showing the underline

  return (
    <div className="header-wrapper">
      <header
        className={darkMode ? "header-dark transition" : "header transition"}
      >
        <div className={darkMode ? "logo-dark transition" : "logo transition"}>
          <h2>RO</h2>
        </div>
        <div className="nav-links">
          {navigationOptions.map((nav, key) => (
            <div key={key} id="links">
              <h2 key={nav.id} onClick={() => scrollToRef(nav.id)}>
                {nav.name}
              </h2>
            </div>
          ))}
          <div id="links">
            <img
              onClick={enableDarkMode}
              className="dark-mode-image transition"
              src={darkMode ? Sun : Moon}
              alt=""
            />
          </div>

          <div
            className={
              props.openNav === false
                ? "hamburger-bar"
                : "hamburger-bar-inactive"
            }
            onClick={() => props.toggleMenu()}
          >
            <img alt="hamburger icon" className="hamburger-bar" src={MenuBar} />
          </div>
        </div>
      </header>
    </div>
  );
}
