import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { style } from "./style";

interface MenuProps {
  menuItems: MenuItem[];
}

export type MenuItem = {
  name: ReactNode;
  to: string;
  subMenuItems?: MenuItem[];
};

export const Menu: React.VFC<MenuProps> = ({ menuItems }) => {
  const RenderSubMenu = React.useCallback((subMenuItems: MenuItem[]) => {
    return (
      <ul className="submenu">
        {subMenuItems.map((subMenu, idx) => {
          return (
            <li key={idx}>
              <Link to={subMenu.to}>{subMenu.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }, []);

  return (
    <nav css={style}>
      <ul className="menu cf">
        {menuItems.map((menu, idx) => {
          return (
            <li key={idx}>
              <Link to={menu.to}>{menu.name}</Link>
              {menu.subMenuItems && RenderSubMenu(menu.subMenuItems)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
