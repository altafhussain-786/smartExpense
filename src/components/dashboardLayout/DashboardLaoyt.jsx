import { Outlet } from "react-router-dom";
import DashboardNavbar from "../common/DashboardNavbar";
import SidebarDashboard from "../common/SidebarDashboard";

const DashboardLaoyt = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <SidebarDashboard />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <DashboardNavbar />
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLaoyt;
