import { useState } from "react";
import { bottomMenu, sidebarData } from "../../data/data";

const SidebarDashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-16 sm:w-20 md:w-64 h-screen bg-gray-100 flex flex-col justify-between p-2 sm:p-4 shadow-md transition-all duration-300 shrink-0">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <div className="bg-orange-500 text-white w-8 h-8 md:w-auto md:h-auto md:p-2 flex items-center justify-center rounded-lg font-bold shrink-0">
            G
          </div>
          <h1 className="text-lg font-semibold hidden md:block">SmartExp</h1>
        </div>
        <div className="space-y-2">
          {sidebarData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.title;
            return (
              <div
                key={index}
                onClick={() => setActiveItem(item.title)}
                title={item.title}
                className={`flex items-center justify-center md:justify-start gap-3 p-2 sm:px-3 sm:py-2 rounded-lg cursor-pointer transition-all duration-300
                                    ${isActive ? "bg-orange-100 text-orange-600" : "text-gray-600 hover:bg-gray-200"}`}
              >
                <Icon size={20} className="shrink-0" />
                <span className="text-sm font-medium hidden md:block whitespace-nowrap">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-2">
        {bottomMenu.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              title={item.title}
              className="flex items-center justify-center md:justify-start gap-3 p-2 sm:px-3 sm:py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-200 transition"
            >
              <Icon size={20} className="shrink-0" />
              <span className="text-sm hidden md:block whitespace-nowrap">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarDashboard;
