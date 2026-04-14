import { spendingBreakdownData } from "../../../data";

const SpendingBreakdown = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
  <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-700">
        Merchant Breakdown
      </h2>
      <span className="text-sm text-orange-500 cursor-pointer hover:underline">
        View full list →
      </span>
    </div>
    <div className="hidden md:grid grid-cols-4 text-xs font-semibold text-gray-400 
                    border-b pb-2 mb-3 px-2">
      <span>Merchant</span>
      <span>Category</span>
      <span>Transactions</span>
      <span className="text-right">Amount</span>
    </div>
    <div className="space-y-2">
      {spendingBreakdownData.merchants.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="grid grid-cols-2 md:grid-cols-4 items-center gap-3 
                       p-3 rounded-xl border border-transparent
                       transition-all duration-300 ease-in-out
                       hover:bg-orange-50 hover:border-orange-200 
                       hover:shadow-md hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center 
                              rounded-full bg-orange-100 
                              transition-all duration-300 group-hover:bg-orange-200">
                <Icon size={18} className="text-orange-500" />
              </div>
              <h3 className="font-medium text-gray-700">
                {item.name}
              </h3>
            </div>
            <div>
              <span
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: item.categoryColor + "20",
                  color: item.categoryColor,
                }}
              >
                {item.category}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.transactions} visits
            </p>
            <p className="text-right font-semibold text-orange-500">
              ${item.amount}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  <div className="bg-white rounded-2xl p-5 shadow-sm 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <h2 className="text-lg font-semibold text-gray-700 mb-4">
      Category Distribution
    </h2>
    <div className="flex items-center justify-center mb-6">
      <div className="w-32 h-32 rounded-full border-[12px] border-gray-200 
                      flex items-center justify-center text-center">
        <div>
          <p className="text-xl font-bold">$82.3k</p>
          <p className="text-xs text-gray-400">TOTAL SPENT</p>
        </div>
      </div>
    </div>
    <div className="space-y-3">
      {spendingBreakdownData.categoryDistribution.categories.map(
        (item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-gray-600">{item.name}</span>
            </div>

            <span className="font-medium text-gray-700">
              {item.percentage}%
            </span>
          </div>
        )
      )}
    </div>
  </div>
</div>
};

export default SpendingBreakdown;
