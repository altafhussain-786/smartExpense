import { transactionHistoryData } from "../../../data/data";

const TransactionTable = () => {
    return <div className="w-full rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none transition-all duration-300 hover:border-gray-400">
                {transactionHistoryData.filters.accounts.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>

            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none transition-all duration-300 hover:border-gray-400">
                {transactionHistoryData.filters.categories.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>

            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none transition-all duration-300 hover:border-gray-400">
                {transactionHistoryData.filters.dateRanges.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
        <div className="hidden md:grid grid-cols-7 gap-4 border-b pb-3 text-xs font-semibold uppercase text-gray-500">
            <p>Date</p>
            <p>Merchant</p>
            <p>Category</p>
            <p>Account</p>
            <p>Amount</p>
            <p>Status</p>
            <p>Actions</p>
        </div>
        <div>
            {transactionHistoryData.transactions.map((transaction, index) => {
                const Icon = transaction.icon;
                return (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-7 gap-4 border-b py-4 items-center transition-all duration-300 hover:bg-gray-50"
                    >
                        <p className="text-sm text-gray-600">{transaction.date}</p>

                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-gray-100 p-2">
                                <Icon size={16} />
                            </div>
                            <p className="text-sm font-medium">{transaction.merchant}</p>
                        </div>

                        <p className="text-sm text-gray-600">{transaction.category}</p>
                        <p className="text-sm text-gray-600">{transaction.account}</p>
                        <p className="text-sm font-medium">{transaction.amount}</p>

                        <span
                            className={`w-fit rounded-full px-3 py-1 text-xs ${transaction.status === "Completed"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                        >
                            {transaction.status}
                        </span>

                        <div className="flex gap-2">
                            {transaction.actions.map((ActionIcon, actionIndex) => (
                                <button
                                    key={actionIndex}
                                    className="rounded-lg p-2 transition-all duration-300 hover:bg-gray-100"
                                >
                                    <ActionIcon size={15} />
                                </button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
            <button className="rounded-lg border px-3 py-1 text-sm transition-all duration-300 hover:bg-gray-100">
                Prev
            </button>

            <span className="rounded-lg bg-black px-3 py-1 text-sm text-white">
                {transactionHistoryData.pagination.currentPage}
            </span>

            <button className="rounded-lg border px-3 py-1 text-sm transition-all duration-300 hover:bg-gray-100">
                Next
            </button>
        </div>
    </div>
};

export default TransactionTable;
