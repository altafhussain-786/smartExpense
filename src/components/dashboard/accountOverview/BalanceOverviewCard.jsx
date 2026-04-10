import { financeCardData } from "../../../data";


const BalanceOverviewCard = () => {
    const AlertIcon = financeCardData.optimizationCard.icon;
    return <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
        <div className="lg:col-span-3 bg-orange-500 rounded-2xl p-6 text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <h2 className="text-sm font-medium opacity-80">
                {financeCardData.balanceCard.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">
                {financeCardData.balanceCard.amount}
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
                {financeCardData.balanceCard.buttons.map((btn, index) => {
                    const Icon = btn.icon;
                    return (
                        <button
                            key={index}
                            className="flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-50 hover:scale-105"
                        >
                            <Icon size={16} />
                            {btn.text}
                        </button>
                    );
                })}
            </div>
        </div>
        <div className="lg:col-span-2 bg-orange-100 rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">

            <div className="flex items-center gap-2 text-orange-600">
                <AlertIcon size={16} />
                <h3 className="text-xs font-semibold uppercase tracking-wide">
                    {financeCardData.optimizationCard.title}
                </h3>
            </div>

            <p className="mt-3 text-sm font-semibold text-gray-900 leading-snug">
                {financeCardData.optimizationCard.heading}
            </p>

            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {financeCardData.optimizationCard.description}
            </p>

            <p className="mt-4 text-xs font-semibold uppercase text-gray-800 cursor-pointer transition-all duration-300 hover:text-black">
                {financeCardData.optimizationCard.action}
            </p>
        </div>

    </div>
};

export default BalanceOverviewCard;
