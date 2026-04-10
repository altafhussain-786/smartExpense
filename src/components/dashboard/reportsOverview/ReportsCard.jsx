import { reportCardData } from "../../../data";

const ReportsCard = () => {
    return <section className="bg-gray-100 p-4 sm:p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {reportCardData.title}
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                    {reportCardData.subtitle}
                </p>
            </div>
            <button className="self-start sm:self-auto bg-white px-3 py-1.5 text-xs sm:text-sm rounded-md shadow hover:shadow-md transition">
                {reportCardData.filter}
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportCardData.stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-3">
                            {/* Icon */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100">
                                <Icon className="w-5 h-5 text-orange-600" />
                            </div>
                            {stat.change && (
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${stat.changeType === "positive"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-500"
                                        }`}
                                >
                                    {stat.change}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            {stat.title}
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-1">
                            {stat.unit === "%"
                                ? `${stat.value}${stat.unit}`
                                : `$${stat.value.toLocaleString()}`}
                        </h3>
                        {stat.target && (
                            <p className="text-xs text-green-600 mt-1">
                                Target: {stat.target}%
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    </section>
};

export default ReportsCard;
