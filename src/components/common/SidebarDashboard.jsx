import { NavLink } from "react-router-dom";
import { bottomMenu, sidebarData } from "../../data";

const SidebarDashboard = () => {
  return (
    <div className="w-16 sm:w-20 md:w-64 h-screen bg-gray-100 flex flex-col justify-between p-2 sm:p-4 shadow-md">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <div className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">
            G
          </div>
          <h1 className="text-lg font-semibold hidden md:block">
            SmartExp
          </h1>
        </div>
        <div className="space-y-2">
          {sidebarData.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={index}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start gap-3 p-2 sm:px-3 sm:py-2 rounded-lg transition-all
                  ${isActive
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-600 hover:bg-gray-200"
                  }`
                }
              >
                {Icon && <Icon size={20} />}
                <span className="text-sm font-medium hidden md:block">
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="space-y-2">
        {bottomMenu.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className="flex items-center justify-center md:justify-start gap-3 p-2 sm:px-3 sm:py-2 rounded-lg text-gray-600 hover:bg-gray-200 transition"
            >
              {Icon && <Icon size={20} />}
              <span className="text-sm hidden md:block">
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarDashboard;