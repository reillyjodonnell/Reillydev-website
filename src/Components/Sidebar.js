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
        <img alt="x" className="x" src={X} />
      </div>
      <div className="sidebar-nav">
        <div className="sidebar-item">
          <span>1</span>
        </div>
        <div className="sidebar-item">
          <span>1</span>
        </div>
        <div className="sidebar-item">
          <span>1</span>
        </div>
        <div className="sidebar-item">
          <span>1</span>
        </div>
        <div className="sidebar-item">
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
