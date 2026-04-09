import { recentTransactionsData } from "../../../data/data";

const RecentTransactions = () => {
    return <div className="bg-white rounded-2xl shadow-md p-5 w-full transition-all duration-300 hover:shadow-lg">
        <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
                {recentTransactionsData.title}
            </h2>
            <button className="text-orange-500 text-sm font-medium hover:underline">
                {recentTransactionsData.buttonText}
            </button>
        </div>
        <div className="hidden md:grid grid-cols-5 text-xs font-semibold text-gray-400 mb-3 px-2">
            <span>TRANSACTION</span>
            <span>CATEGORY</span>
            <span>DATE</span>
            <span>AMOUNT</span>
            <span>STATUS</span>
        </div>
        <div className="space-y-3">
            {recentTransactionsData.transactions.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-5 items-center gap-3 bg-gray-50 p-3 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-[1.01]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-200 rounded-lg">
                                <Icon size={18} className="text-gray-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800">
                                    {item.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="bg-gray-200 px-2 py-1 rounded-md text-xs">
                                {item.category}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500">
                            {item.date}
                        </div>
                        <div className={`text-sm font-semibold ${item.amountColor}`}>
                            {item.amount}
                        </div>
                        <div className={`text-sm font-medium ${item.statusColor}`}>
                            ● {item.status}
                        </div>

                    </div>
                );
            })}
        </div>

    </div>
};

export default RecentTransactions;
