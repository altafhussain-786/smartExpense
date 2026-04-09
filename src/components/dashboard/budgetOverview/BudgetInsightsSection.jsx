import { budgetInsightsData } from "../../../data/data";

const BudgetInsightsSection = () => {
    return <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                    {budgetInsightsData.title}
                </h2>
                <button className="text-orange-500 text-sm hover:underline">
                    {budgetInsightsData.actionText}
                </button>
            </div>
            {budgetInsightsData.categories.map((category, index) => {
                const Icon = category.icon;

                return (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">
                                        {category.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        ${category.spent} of ${category.total} spent
                                    </p>
                                </div>
                            </div>
                            <span
                                className={`text-xs px-2 py-1 rounded-full ${category.statusColor}`}
                            >
                                {category.status}
                            </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div
                                className={`h-full ${category.barColor} transition-all duration-500`}
                                style={{ width: `${category.percent}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>{category.percent}% Utilized</span>
                            <span>
                                ${category.total - category.spent}{" "}
                                {category.percent > 100 ? "Over" : "Left"}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="space-y-4">
            <div className="bg-[#0f172a] text-white p-5 rounded-2xl shadow-md">
                <h3 className="text-sm font-semibold mb-4">
                    Predictive Insights
                </h3>
                <div className="space-y-3">
                    {budgetInsightsData.insights.map((insight, index) => (
                        <div
                            key={index}
                            className="bg-white/10 p-3 rounded-lg text-sm"
                        >
                            {insight.text}
                        </div>
                    ))}
                </div>
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded-lg text-sm">
                    {budgetInsightsData.buttonText}
                </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-sm font-semibold mb-3 text-gray-800">
                    Upcoming Bills
                </h3>
                <div className="space-y-3">
                    {budgetInsightsData.bills.map((bill, index) => {
                        const Icon = bill.icon;
                        return (
                            <div
                                key={index}
                                className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${bill.color}`}>
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            {bill.name}
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            {bill.date}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">
                                    {bill.amount}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
};

export default BudgetInsightsSection;
