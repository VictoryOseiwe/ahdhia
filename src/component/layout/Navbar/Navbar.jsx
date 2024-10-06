import React, { useState } from "react";
import { Search, Shop, Menu, CloseMenu } from "../../common/Icons";
import "./Navbar.css";

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      <div className="navbar-container">
        <h1>ANDHIA</h1>
        <ul className="navbar-item">
          <li>Home</li>
          <li>Woman</li>
          <li>Man</li>
          <li>Kids</li>
          <li>Collaboration</li>
          <li>Sport</li>
          <li>Sale</li>
        </ul>
        <div className="navbar-icon">
          <Search />
          <Shop />
          <p>Login</p>
          <button className="menu-toggle" onClick={toggleSideBar}>
            <Menu size={32} />
          </button>
        </div>
      </div>
      <div className={`sidebar ${showSideBar ? "open" : ""}`}>
        <button className="menu-close" onClick={toggleSideBar}>
          <CloseMenu size={32} />
        </button>
        <ul className="sidebar-item">
          <li>Home</li>
          <li>Woman</li>
          <li>Man</li>
          <li>Kids</li>
          <li>Collaboration</li>
          <li>Sport</li>
          <li>Sale</li>
        </ul>
        <p>Login</p>
      </div>

      {showSideBar && <div className="overlay" onClick={toggleSideBar} />}
    </>
  );
}
