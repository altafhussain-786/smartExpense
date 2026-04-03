import { useState } from "react";
import { bottomMenu, sidebarData } from "../../data/data";

const SidebarDashboard = () => {
      const [activeItem, setActiveItem] = useState("Dashboard");
  return  <div className="w-64 h-screen bg-gray-100 flex flex-col justify-between p-4 shadow-md">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-orange-500 text-white p-2 rounded-lg font-bold">
            G
          </div>
          <h1 className="text-lg font-semibold">SmartExp</h1>
        </div>
        <div className="space-y-2">
          {sidebarData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.title;
            return (
              <div
                key={index}
                onClick={() => setActiveItem(item.title)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="space-y-2">
        {bottomMenu.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-200 transition"
            >
              <Icon size={18} />
              <span className="text-sm">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
};

export default SidebarDashboard;
