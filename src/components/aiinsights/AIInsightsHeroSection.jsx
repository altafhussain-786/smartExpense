import { aiInsightsSection } from "../../data/data";
import FinancialAssistantCard from "./FinancialAssistantCard";
import RecentInsightsCard from "./RecentInsightsCard";

const AIInsightsHeroSection = () => {
    return <div
        className="p-4 md:p-6 min-h-screen transition-colors duration-500"
        style={{ backgroundColor: "#f8f6f6" }}
    >
        <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 transition-all duration-300">
                {aiInsightsSection.mainTitle}
            </h2>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
                {aiInsightsSection.subtitle}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-end justify-between h-52 md:h-60 gap-2 md:gap-3 overflow-x-auto">
                    {aiInsightsSection.chartData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center flex-1 min-w-[50px]"
                        >
                            <div className="h-full flex items-end">
                                <div
                                    className="w-6 md:w-8 bg-orange-400 rounded-lg transition-all duration-500 ease-out hover:bg-orange-500 hover:scale-105 origin-bottom"
                                    style={{
                                        height: `${item.expenses / 3}px`,
                                    }}
                                />
                            </div>
                            <p className="text-[10px] md:text-xs text-gray-400 mt-2 transition-all">
                                ${item.expenses}
                            </p>
                            <p className="text-[10px] md:text-xs font-medium text-gray-700">
                                {item.month}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <p className="text-orange-500 text-xs font-semibold mb-2 tracking-wide">
                    {aiInsightsSection.insightsCard.tag}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 transition-all">
                    {aiInsightsSection.insightsCard.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {aiInsightsSection.insightsCard.description}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 transition-all">
                    {aiInsightsSection.insightsCard.amount}
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                    {aiInsightsSection.insightsCard.breakdown.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-xs md:text-sm text-gray-600 transition-all hover:text-gray-900"
                        >
                            <span
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${item.color === "orange"
                                        ? "bg-orange-500"
                                        : item.color === "dark-orange"
                                            ? "bg-orange-700"
                                            : "bg-gray-400"
                                    }`}
                            />
                            <p>
                                {item.label} ({item.percentage}%)
                            </p>
                        </div>
                    ))}
                </div>
                <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                    {aiInsightsSection.insightsCard.buttonText}
                </button>
            </div>

        </div>
        <RecentInsightsCard/>
        <FinancialAssistantCard/>
    </div>
};

export default AIInsightsHeroSection;
