import { dashboardNavbarData } from "../../data";

const DashboardNavbar = () => {
    const SearchIcon = dashboardNavbarData.search.icon;

    return (
        <div className="w-full bg-white px-4 sm:px-6 py-3 flex items-center justify-between border-b">
            <div className="flex items-center flex-1 max-w-[160px] sm:max-w-[250px] md:max-w-[400px] bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-orange-200 focus-within:ring-2 focus-within:ring-orange-300 transition mr-2 sm:mr-4">
                <SearchIcon size={18} className="text-gray-400 mr-2 shrink-0" />
                <input
                    type="text"
                    placeholder={dashboardNavbarData.search.placeholder}
                    className="bg-transparent outline-none w-full text-xs sm:text-sm"
                />
            </div>

            <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                <div className="flex items-center gap-3 sm:gap-4">
                    {dashboardNavbarData.actions.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={index} className="relative cursor-pointer">
                                <Icon className="text-gray-600" size={20} />

                                {item.count && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <img
                        src={dashboardNavbarData.user.avatar}
                        alt="user"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
                    />
                    <div className="hidden sm:block">
                        <h4 className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                            {dashboardNavbarData.user.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                            {dashboardNavbarData.user.plan}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
