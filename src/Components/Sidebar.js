import React from "react";
import X from "../Assets/Icons/X.svg";
import "../CSS Components/Sidebar.css";

export default function Sidebar({ openNav, toggleMenu }) {
  return (
    <div
      className={openNav ? "sidebar-container" : "sidebar-container-inactive"}
    >
      <div
        className={openNav ? "exit-sidebar" : "exit-sidebar-inactive"}
        onClick={toggleMenu}
      >
        <img className="x" src={X} />
      </div>
    </div>
  );
}
