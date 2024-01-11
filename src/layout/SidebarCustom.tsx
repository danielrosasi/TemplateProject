import React from "react";
import { Sidebar, SidebarProps } from "react-pro-sidebar";
type Props = SidebarProps & {
  toggled: boolean;
  collapsed: boolean;
  handleToggleSidebar: (value: boolean) => void;
  handleCollapsedChange: () => void;
  defaultCollapsed?: boolean;
};

export function SidebarCustom(props: Props) {
  return <Sidebar {...props}></Sidebar>;
}
