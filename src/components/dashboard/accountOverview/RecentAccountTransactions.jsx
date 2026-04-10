import { recentAccountTransactionsData } from "../../../data";


const RecentAccountTransactions = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm 
                  transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                    Recent Movements
                </h2>
                <div className="flex bg-gray-100 rounded-full p-1 text-xs">
                    <button className="px-3 py-1 rounded-full bg-white shadow text-gray-700">
                        Internal
                    </button>
                    <button className="px-3 py-1 text-gray-400">
                        External
                    </button>
                </div>
            </div>
            <div className="hidden sm:grid grid-cols-4 text-xs text-gray-400 mb-3 px-2">
                <span>Transfer Detail</span>
                <span>Type</span>
                <span>Date</span>
                <span className="text-right">Amount</span>
            </div>
            <div className="space-y-4">
                {recentAccountTransactionsData.transactions.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="grid grid-cols-1 sm:grid-cols-4 items-center gap-3 
                       p-3 rounded-xl transition-all duration-300 
                       hover:bg-gray-50 hover:scale-[1.01]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl 
                              bg-orange-100 text-orange-600">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-medium text-gray-400 uppercase">
                                {item.type}
                            </span>
                            <span className="text-xs text-gray-400">
                                {item.date}
                            </span>
                            <span className="text-sm font-semibold text-gray-800 text-right">
                                ${item.amount.toLocaleString()}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm 
                  transition-all duration-300 hover:shadow-xl">

            <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Asset Allocation
            </h2>
            <div className="relative flex items-center justify-center mb-6">
                <div className="w-36 h-36 rounded-full border-[10px] border-gray-100"></div>
                <div className="absolute w-36 h-36 rounded-full border-[10px] 
                      border-orange-500 border-t-transparent border-l-transparent 
                      rotate-45 transition-all duration-500"></div>
                <div className="absolute text-center">
                    <p className="text-xs text-gray-400">LIQUIDITY</p>
                    <p className="text-2xl font-bold text-gray-800">
                        {recentAccountTransactionsData.assetAllocation.liquidity}%
                    </p>
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 
                         bg-orange-500 text-white rounded-full 
                         flex items-center justify-center shadow-md 
                         hover:scale-110 transition">
                    +
                </button>
            </div>
            <div className="space-y-3">
                {recentAccountTransactionsData.assetAllocation.categories.map((cat, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: cat.color }}
                            ></span>
                            <span className="text-gray-600">{cat.name}</span>
                        </div>
                        <span className="text-gray-500 font-medium">
                            {cat.value}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
};

export default RecentAccountTransactions;
