import React from "react";
import Header from "../Header";
import { useTheme } from "../../contexts/ThemeContext";

export default function Card(props, setActiveScreen, mobile) {
  const { darkMode } = useTheme();

  return (
    <section id={props.id} className={props.content}>
      <div
        className={
          darkMode ? "main-card-dark transition" : "main-card transition"
        }
      >
        <Header style={{ position: "sticky" }} mobile={props.mobile} />
        {props.children}
      </div>
    </section>
  );
}
