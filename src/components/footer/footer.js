import React from "react";
import HeaderMenu from "../header-menu";
import "./footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div>
        <img src="/logo.svg" />
        <h1>
          <a href="http://google.com" target="_blank">
            TECHSUPPLY
          </a>
        </h1>
      </div>
      <HeaderMenu
        styleProps={{
          flexDirection: "column",
          color: "#ECE8ED",
          lineHeight: "3rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch",
        }}
        iiStyleProps={{ fontSize: "14px" }}
      />

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "auto",
          }}
        >
          <div>
            <span
              style={{
                color: "lightgray",
                paddingRight: "1rem",
              }}
              className="material-icons"
            >
              add_ic_call
            </span>
            {""}
            <a style={{ textDecoration: "none" }} href="tel:#">
              <h2>+38 (097) 111-11-11</h2>
            </a>
          </div>
          <div>
            <span
              style={{ color: "lightgray", paddingRight: "1rem" }}
              class="material-icons"
            >
              location_on
            </span>
            <a style={{ textDecoration: "none" }} href="#">
              <h2>Vygoda</h2>
            </a>
          </div>
          <div>
            <span
              style={{ color: "lightgray", paddingRight: "1rem" }}
              class="material-icons"
            >
              email
            </span>
            <a style={{ textDecoration: "none" }} href="mailto:#">
              <h2>example@gmail.com</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
