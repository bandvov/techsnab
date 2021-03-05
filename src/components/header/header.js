import React from "react";
import "./header.scss";
import HeaderMenu from "../header-menu";

export default function Header() {
  return (
    <div>
      <div id="header">
        <div>
          <img src="/logo.svg" />
          <h1>
            <a href="http://google.com" target="_blank">
              TECHSUPPLY
            </a>
          </h1>
        </div>
        <div className="search">
          <input type="text" />
          <button
            title="click to search"
            className="material-icons search-button"
          >
            search
          </button>
        </div>
        <div>
          <span className="material-icons">add_ic_call</span>{" "}
          <a href="tel:#">
            <h2>+38 (097) 111-11-11</h2>
          </a>
        </div>
      </div>
      <HeaderMenu />
    </div>
  );
}
