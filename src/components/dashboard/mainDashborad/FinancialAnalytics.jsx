import { analyticsData } from "../../../data/data";

const FinancialAnalytics = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-[#0f172a]">
                        Monthly Trend
                    </h2>
                    <p className="text-sm text-gray-500">
                        Net savings over the last 6 months
                    </p>
                </div>

                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">
                    Last 6 Months
                </span>
            </div>
            <div className="w-full h-64 relative">

                <svg viewBox="0 0 600 220" className="w-full h-full">
                    <path
                        d="M20 180 
             C100 150, 150 90, 220 80 
             C300 70, 340 150, 400 120
             C470 80, 500 20, 560 90
             L560 220 L20 220 Z"
                        fill="#f97316"
                        opacity="0.08"
                    />
                    <path
                        d="M20 180 
             C100 150, 150 90, 220 80 
             C300 70, 340 150, 400 120
             C470 80, 500 20, 560 90"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-400 font-medium">
                    <span>JAN</span>
                    <span>FEB</span>
                    <span>MAR</span>
                    <span>APR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#0f172a]">
                    Category Spending
                </h2>
                <p className="text-sm text-gray-500">
                    Where your money goes
                </p>
            </div>
            <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">

                    <svg viewBox="0 0 120 120" className="w-full h-full rotate-[-90deg]">
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="#e5e7eb"
                            strokeWidth="12"
                            fill="none"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="#f97316"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray="127 283"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="#10b981"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray="70 283"
                            strokeDashoffset="-135"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">$3,120</h3>
                        <p className="text-xs text-gray-500">TOTAL SPENT</p>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                {analyticsData.categorySpending.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center hover:bg-gray-50 px-2 py-2 rounded-lg transition"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span>{item.name}</span>
                        </div>
                        <span className="font-semibold">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default FinancialAnalytics;
