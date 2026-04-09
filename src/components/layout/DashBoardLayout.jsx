import React from "react";
import SidebarDashboard from "../common/SidebarDashboard";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../common/DashboardNavbar";

const DashBoardLayout = () => {
  return <>
    <SidebarDashboard/>
    <DashboardNavbar/>
    <Outlet/>

  </>;
};

export default DashBoardLayout;
