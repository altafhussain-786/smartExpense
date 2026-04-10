import { reportInsightsData } from "../../../data";

const ReportsAnalysisSection = () => {
    const TrendIcon = reportInsightsData.chart.icon;
    const BrainIcon = reportInsightsData.aiInsights.icon;
    const MilestoneIcon = reportInsightsData.aiInsights.milestone.icon;
    return <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <TrendIcon className="w-5 h-5 text-orange-500" />
                        {reportInsightsData.chart.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {reportInsightsData.chart.subtitle}
                    </p>
                </div>
                <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Income
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        Expenses
                    </span>
                </div>
            </div>
            <div className="flex items-end justify-between h-44 gap-2 mt-4">
                {reportInsightsData.chart.data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 group">
                        <div className="w-full flex flex-col justify-end gap-1 h-32">
                            <div
                                className="bg-orange-500 rounded-sm transition-all duration-500 group-hover:opacity-80 group-hover:scale-y-105 origin-bottom"
                                style={{ height: `${item.income / 50}%` }}
                            ></div>
                            <div
                                className="bg-gray-300 rounded-sm transition-all duration-500 group-hover:opacity-70"
                                style={{ height: `${item.expenses / 50}%` }}
                            ></div>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 group-hover:text-gray-600 transition">
                            {item.month}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-5">
                    <BrainIcon className="w-5 h-5" />
                    <h3 className="font-semibold text-sm sm:text-base">
                        {reportInsightsData.aiInsights.title}
                    </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-5 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                        <MilestoneIcon className="w-4 h-4 text-green-300" />
                        <p className="text-xs font-semibold uppercase tracking-wide">
                            {reportInsightsData.aiInsights.milestone.title}
                        </p>
                    </div>
                    <p className="text-xs text-orange-100 leading-relaxed">
                        {reportInsightsData.aiInsights.milestone.description}
                    </p>
                </div>
                <div className="space-y-3">
                    {reportInsightsData.aiInsights.recommendations.map((rec, index) => {
                        const Icon = rec.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-start gap-2 text-xs hover:translate-x-1 hover:scale-[1.01] transition-all duration-300"
                            >
                                <Icon className="w-4 h-4 mt-0.5 text-orange-200 shrink-0" />
                                <p className="leading-relaxed">{rec.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="mt-6 bg-white text-orange-600 text-sm py-2 rounded-lg font-medium hover:bg-orange-100 hover:scale-[1.05] active:scale-95 transition-all duration-300">
                {reportInsightsData.aiInsights.buttonText}
            </button>
        </div>
    </section>
};

export default ReportsAnalysisSection;
