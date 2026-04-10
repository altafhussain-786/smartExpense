import { X } from "lucide-react";

const ViewTransactionModal = ({ transaction, onClose }) => {
    if (!transaction) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl pt-5">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Transaction Details</h2>
                    <button onClick={onClose} className="rounded-full p-1.5 transition-colors hover:bg-gray-100">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-sm font-medium text-gray-500">Merchant</span>
                        <div className="flex items-center gap-2">
                            {transaction.icon && <transaction.icon size={16} className="text-gray-500" />}
                            <span className="font-semibold text-gray-800">{transaction.merchant}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-sm font-medium text-gray-500">Amount</span>
                        <span className="font-semibold text-gray-800">{transaction.amount}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-sm font-medium text-gray-500">Date</span>
                        <span className="font-semibold text-gray-800">{transaction.date}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-sm font-medium text-gray-500">Category</span>
                        <span className="font-semibold text-gray-800">{transaction.category}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-sm font-medium text-gray-500">Account</span>
                        <span className="font-semibold text-gray-800">{transaction.account}</span>
                    </div>
                    <div className="flex items-center justify-between pb-1">
                        <span className="text-sm font-medium text-gray-500">Status</span>
                        <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${transaction.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                            {transaction.status}
                        </span>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button onClick={onClose} className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewTransactionModal;
