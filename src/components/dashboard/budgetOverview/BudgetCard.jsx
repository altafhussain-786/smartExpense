import { budgetCardData } from "../../../data";

const BudgetCard = () => {
    const PeriodIcon = budgetCardData.headerActions.period.icon;
    const ButtonIcon = budgetCardData.headerActions.button.icon;

    return <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {budgetCardData.title}
                </h2>
                <p className="text-sm text-gray-500">
                    {budgetCardData.subtitle}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                    <PeriodIcon size={16} />
                    {budgetCardData.headerActions.period.label}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition">
                    <ButtonIcon size={16} />
                    {budgetCardData.headerActions.button.text}
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetCardData.cards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${card.bgColor}`}>
                                <Icon className={card.iconColor} size={20} />
                            </div>
                            <h4 className="text-sm text-gray-500 font-medium">
                                {card.title}
                            </h4>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">
                            {card.value}
                        </h2>
                        <p className={`text-sm ${card.changeColor}`}>
                            {card.change}
                        </p>

                    </div>
                );
            })}
        </div>
    </div>
};

export default BudgetCard;
