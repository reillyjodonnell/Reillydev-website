import React from "react";

import "../CSS Components/Blog.css";
import { useTheme } from "../contexts/ThemeContext";
import Satellite from "../Assets/Icons/Comet.svg";

export default function Skills() {
  const { darkMode } = useTheme();
  return (
    <>
      <section id="blog">
        <div className="portfolio-container">
          <div className={darkMode ? "blog-header" : "blog-header-light"}>
            <img alt="satellite" src={Satellite} />
            <h1>Recent Writings</h1>
          </div>
          <div className={darkMode ? "blog-button" : "blog-button blog-light"}>
            <a target="_blank" rel="noreferrer" href="https://blog.reilly.dev">
              blog.reilly.dev
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
