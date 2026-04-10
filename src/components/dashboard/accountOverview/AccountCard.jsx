import { accountsData } from "../../../data";

const AccountCard = () => {
    return <div className="p-4 md:p-6 bg-gray-50 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
                {accountsData.title}
            </h2>
            <button className="text-sm font-medium text-orange-400 transition-all duration-300 hover:text-orange-600">
                {accountsData.action}
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accountsData.accounts.map((account, index) => {
                const Icon = account.icon;

                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                                <Icon size={16} className="text-orange-400" />
                            </div>
                            <span className={`text-[10px] font-semibold uppercase ${account.badgeColor}`}>
                                {account.badge}
                            </span>
                        </div>
                        <h3 className="text-sm text-gray-500 mb-1">
                            {account.name}
                        </h3>
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            {account.amount}
                        </p>
                        <p className="text-[10px] uppercase text-gray-400 mb-2">
                            {account.footerLabel}
                        </p>
                        <div className="flex justify-between text-xs font-medium">
                            <span className="text-gray-600">{account.footerLeft}</span>
                            <span className="text-red-500">{account.footerRight}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
};

export default AccountCard;
