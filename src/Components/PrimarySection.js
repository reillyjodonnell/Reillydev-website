import React from "react";
import "../CSS Components/PrimarySection.css";
import Navbar from "./NavigationBar";
import Introduction from './Introduction';
//This needs to show the first section. Including two main columns
//The left-most column that shows the main symbols
//The other column contains the rest of the content
export default function PrimarySection() {
  return (
    <div className="content">
      <div className="secondary-content">
        <h1>This is the secondary content</h1>
      </div>
      <div className="main-content">
        <Navbar />
        <Introduction/>
      </div>
    </div>
  );
}
