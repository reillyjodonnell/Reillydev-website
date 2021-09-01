import React, { useState, useEffect } from "react";
import "../CSS Components/Header.css";
import Moon from "../Assets/Icons/Moon.svg";
import Sun from "../Assets/Icons/Sun.svg";
import MenuBar from "../Assets/Icons/MenuBar.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Header(props) {
  const [active, setActive] = useState(0);
  const { toggleDarkTheme, darkMode } = useTheme();

  const pinkColor = "rgb(214 107 160)";

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
      name: "skills",
    },

    {
      id: 4,
      name: "blog",
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
        {props.mobile ? (
          <div className="hamburger-bar">
            <img src={MenuBar} className="hamburger-icon" alt="" srcset="" />
          </div>
        ) : (
          <div className="nav-links">
            {navigationOptions.map((nav) => (
              <div id="links">
                <h2
                  key={nav.id}
                  style={active == nav.id ? { color: pinkColor } : null}
                  onClick={() => scrollToRef(nav.id)}
                >
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
                srcset=""
              />
            </div>
            <img className="hamburger-bar" src={MenuBar} />
          </div>
        )}
      </header>
    </div>
  );
}
