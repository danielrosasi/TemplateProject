import { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import "../../index.css";
import { SidebarCustom } from "../SidebarCustom";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <SidebarCustom
      className={`app ${toggled ? "toggled" : ""}`}
      style={{ height: "100vh" }}
      collapsed={collapsed}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}
    >
      <main>
        <Menu>
          {collapsed ? (
            <MenuItem
              icon={<FiChevronsRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: "1px",
                }}
              >
                YOUR LOGO!..
              </div>
            </MenuItem>
          )}
          <hr />
        </Menu>

        <Menu>
          <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
          <SubMenu label={"Professors"} icon={<RiTeamLine />}>
            <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
            <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
            <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
          </SubMenu>
          <SubMenu label={"Records"} icon={<RiFolder2Line />}>
            <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
            <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
          </SubMenu>
        </Menu>
      </main>
    </SidebarCustom>
  );
}
