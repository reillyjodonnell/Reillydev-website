import React from "react";
import Header from "../Header";
import { useTheme } from "../../contexts/ThemeContext";
import Home from "../Cards/HomeCard";

export default function Card(props, setActiveScreen, mobile) {
  const { darkMode } = useTheme();

  return (
    <section id={props.id} className={props.content}>
      <div
        className={
          darkMode ? "main-card-dark transition" : "main-card transition"
        }
      >
        <Header
          scroll={props.scroll}
          style={{ position: "sticky" }}
          mobile={props.mobile}
        />
        <Home />
      </div>
    </section>
  );
}
