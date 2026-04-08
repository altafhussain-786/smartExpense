import { transactionsOverviewData } from "../../../data/data";

const TransactionsCard = () => {
  return <div className="p-4 md:p-6 space-y-6">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

      <div>
        <h2 className="text-xl md:text-2xl font-bold">
          {transactionsOverviewData.title}
        </h2>
        <p className="text-gray-500 text-sm">
          {transactionsOverviewData.subtitle}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {transactionsOverviewData.actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={item.action} // ✅ FIX (no function call here)
              className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300 ease-in-out
                  hover:scale-105 active:scale-95

                  ${item.variant === "primary" &&
                "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg"}

                  ${item.variant === "outline" &&
                "border border-gray-300 text-gray-700 hover:bg-gray-100"}
                `}
            >
              <Icon size={16} />
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {transactionsOverviewData.stats.map((item, index) => {
        const Icon = item.icon;
        const isPositive = item.growth.includes("+");

        return (
          <div
            key={index}
            className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:-translate-y-1"
          >
            <div className="bg-orange-100 p-3 rounded-lg">
              <Icon className="text-orange-500" size={22} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-lg font-semibold">{item.value}</h3>
              <span
                className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"
                  }`}
              >
                {item.growth}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
};

export default TransactionsCard;
