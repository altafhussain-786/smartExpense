import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalytics } from "../../../redux/features/dashboard/dashboardSlice";
import CircleIcon from "../../../assets/icon/CircleIcon";
import TrendAnalyticsWave from "../../../assets/icon/TrendAnalyticsWave";

const FinancialAnalytics = () => {
    const dispatch = useDispatch();
    const { analytics } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(fetchAnalytics());
    }, [dispatch]);

    const months = analytics?.monthlyTrend?.length > 0
        ? analytics.monthlyTrend.map((m) => m.month.toUpperCase())
        : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

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
                <TrendAnalyticsWave />
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-400 font-medium">
                    {months.map((m) => (
                        <span key={m}>{m}</span>
                    ))}
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
                    <CircleIcon />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">
                            ${Number(analytics?.totalSpent || 0).toLocaleString()}
                        </h3>
                        <p className="text-xs text-gray-500">TOTAL SPENT</p>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                {(analytics?.categorySpending || []).map((item, index) => (
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
                {(analytics?.categorySpending || []).length === 0 && (
                    <p className="text-center text-gray-400 text-sm py-4">
                        No expense yet.
                    </p>
                )}
            </div>
        </div>
    </div>;
};

export default FinancialAnalytics;