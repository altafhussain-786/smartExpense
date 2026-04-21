import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDashboardSummary } from "../../../redux/features/dashboard/dashboardSlice.js"
import { statsData } from "../../../data"

const StatusCard = () => {
    const dispatch = useDispatch()
    const { summary } = useSelector(s => s.dashboard)

    useEffect(() => {
        dispatch(getDashboardSummary())
    }, [dispatch])

    const stats = statsData.map((item) => {
        const backendItem = summary?.stats?.find(b => b.key === item.backendKey)
        return {
            ...item,
            amount:   backendItem?.amount   ?? item.amount,
            change:   backendItem?.change   ?? item.change,
            progress: backendItem?.progress ?? item.progress,
        }
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
            {stats.map((item, index) => {
                const Icon = item.icon
                return (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div
                                className={`p-2 rounded-lg ${item.color === "orange"
                                    ? "bg-orange-100 text-orange-500"
                                    : item.color === "green"
                                        ? "bg-green-100 text-green-500"
                                        : "bg-red-100 text-red-500"
                                }`}
                            >
                                <Icon size={18} />
                            </div>
                            <span
                                className={`text-xs font-semibold px-2 py-1 rounded-full ${item.color === "green"
                                    ? "bg-green-100 text-green-500"
                                    : item.color === "red"
                                        ? "bg-red-100 text-red-500"
                                        : "bg-orange-100 text-orange-500"
                                }`}
                            >
                                {item.change}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            {item.title}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-1">
                            {item.amount}
                        </h3>
                        {item.progress && (
                            <div className="mt-4">
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default StatusCard