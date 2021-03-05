import React from "react";
import { headerMenuItems } from "../../configs";
import "./header-menu.scss";

function HeaderMenu({ styleProps, liStyleProps }) {
  const menuItems = headerMenuItems.map((value) => {
    return (
      <li style={{ ...liStyleProps }} key={value}>
        <a href={value.url}>{value.name}</a>
      </li>
    );
  });
  return (
    <ul style={{ ...styleProps }} className="header-menu">
      {menuItems}
    </ul>
  );
}

export default HeaderMenu;
