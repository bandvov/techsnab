import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/right-arrow.svg";

function MenuItem({ name, url, icon, children, ...rest }) {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  const onMouseOver = (value) => {
    if (children) {
      setOpen(value);
      setOffset(ref.current.clientWidth);
    }
  };
  return (
    <div
      ref={ref}
      className="menu-item"
      style={{
        display: "flex",
        alignItems: "center",
        transition: "0.3s ease",
        height: "2.5rem",
      }}
    >
      <Link
        {...rest}
        onMouseOver={() => onMouseOver(true)}
        onMouseLeave={() => onMouseOver(false)}
        to={url ? url : ""}
      >
        {icon ? icon : ""}
        <div style={{ dislay: "flex", justifyContent: "space-between" }}>
          <span style={{ margin: "0 .5rem" }}>{name}</span>
          {children && <img src={arrow} />}
        </div>
        <div
          style={{
            display: open ? "block" : "none",
            position: "absolute",
            right: -offset,
            top: "7px",
            transition: ".5s",
            backgroundColor: "white",
          }}
        >
          {children}
        </div>
      </Link>
      <style jsx>{`
        .menu-item {
          border: 1px solid #aac;
          background: #fff;
        }
        .menu-item:hover {
          background: rgba(247, 148, 30, 0.3);
        }
        .menu-item a {
          display: flex;
          align-items: center;
          color: #8b868f;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          width: 100%;
          height: 100%;
          padding: 0.5rem;
          text-decoration: none;
          position: relative;
        }
        .menu-item a div {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

export default MenuItem;
