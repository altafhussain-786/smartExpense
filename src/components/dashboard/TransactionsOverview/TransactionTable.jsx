import { useState } from "react";
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight, CreditCard, Landmark } from "lucide-react";
import { transactionHistoryData } from "../../../data";
import ViewTransactionModal from "./ViewTransactionModal";
import EditTransactionModal from "./EditTransactionModal";
import DeleteTransactionModal from "./DeleteTransactionModal";

const getCategoryStyles = (category) => {
    switch (category) {
        case "Food & Dining":
            return { bg: "bg-orange-100/80", text: "text-orange-600", iconBg: "bg-orange-100", iconText: "text-orange-500" };
        case "Transportation":
            return { bg: "bg-blue-100/80", text: "text-blue-600", iconBg: "bg-blue-100", iconText: "text-blue-500" };
        case "Income":
            return { bg: "bg-emerald-100/80", text: "text-emerald-600", iconBg: "bg-emerald-100", iconText: "text-emerald-500" };
        case "Software SaaS":
            return { bg: "bg-indigo-100/80", text: "text-indigo-600", iconBg: "bg-indigo-100", iconText: "text-indigo-500" };
        default:
            return { bg: "bg-gray-100", text: "text-gray-600", iconBg: "bg-gray-100", iconText: "text-gray-500" };
    }
};

const getStatusStyles = (status) => {
    switch (status) {
        case "Completed":
            return { dot: "bg-emerald-500", text: "text-emerald-500" };
        case "Pending":
            return { dot: "bg-amber-500", text: "text-amber-500" };
        default:
            return { dot: "bg-gray-500", text: "text-gray-500" };
    }
};

const TransactionTable = () => {
    const [transactions, setTransactions] = useState(transactionHistoryData.transactions);

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 32;
    const [viewModalData, setViewModalData] = useState(null);
    const [editModalData, setEditModalData] = useState(null);
    const [deleteModalData, setDeleteModalData] = useState(null);

    const handleSaveEdit = (updatedTransaction) => {
        setTransactions(transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t));
        setEditModalData(null);
    };

    const handleDelete = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
        setDeleteModalData(null);
    };

    const currentTransactions = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-8">
            <div className="flex flex-col gap-4 border-b border-gray-100 p-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-wrap gap-4 md:flex-row w-full md:w-auto">
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Category</label>
                        <select className="w-full md:min-w-[200px] appearance-none rounded-lg border border-gray-300 px-4 py-2.5 text-[14px] text-gray-700 outline-none transition-all hover:border-gray-400 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white">
                            {transactionHistoryData.filters.categories.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Account</label>
                        <select className="w-full md:min-w-[200px] appearance-none rounded-lg border border-gray-300 px-4 py-2.5 text-[14px] text-gray-700 outline-none transition-all hover:border-gray-400 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white">
                            {transactionHistoryData.filters.accounts.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Date Range</label>
                        <select className="w-full md:min-w-[200px] appearance-none rounded-lg border border-gray-300 px-4 py-2.5 text-[14px] text-gray-700 outline-none transition-all hover:border-gray-400 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white">
                            {transactionHistoryData.filters.dateRanges.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="text-[14px] font-bold text-[#f97316] hover:text-orange-600 transition-colors pb-3">
                    Clear Filters
                </button>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#f8fafc] border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            <th className="py-4 px-6">Date</th>
                            <th className="py-4 px-6">Merchant / Description</th>
                            <th className="py-4 px-6">Category</th>
                            <th className="py-4 px-6">Account</th>
                            <th className="py-4 px-6">Amount</th>
                            <th className="py-4 px-6">Status</th>
                            <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {currentTransactions.map((transaction, index) => {
                            const Icon = transaction.icon;
                            const styles = getCategoryStyles(transaction.category);
                            const statusStyles = getStatusStyles(transaction.status);
                            const amountStr = transaction.amount.toString();
                            const isPositive = amountStr.startsWith('+');
                            const isNegative = amountStr.startsWith('-');
                            const amountColor = isPositive ? 'text-emerald-500' : isNegative ? 'text-red-500' : 'text-gray-800';
                            const isBank = transaction.category === "Income";
                            const AccountIcon = isBank ? Landmark : CreditCard;

                            return (
                                <tr
                                    key={transaction.id || index}
                                    className="group transition-colors hover:bg-gray-50/50"
                                >
                                    <td className="whitespace-nowrap py-5 px-6 text-[14px] font-medium text-gray-600">
                                        {transaction.date}
                                    </td>

                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl bg-opacity-30 ${styles.iconBg} ${styles.iconText}`}>
                                                {Icon && <Icon size={18} strokeWidth={2.5} />}
                                            </div>
                                            <span className="whitespace-nowrap text-[15px] font-bold text-[#1f2937]">{transaction.merchant}</span>
                                        </div>
                                    </td>

                                    <td className="whitespace-nowrap py-5 px-6">
                                        <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-opacity-70 ${styles.bg} ${styles.text}`}>
                                            {transaction.category}
                                        </span>
                                    </td>

                                    <td className="whitespace-nowrap py-5 px-6">
                                        <div className="flex items-center gap-2.5 text-[14px] font-medium text-gray-500">
                                            <AccountIcon size={16} className="text-gray-400" />
                                            {transaction.account}
                                        </div>
                                    </td>

                                    <td className={`whitespace-nowrap py-5 px-6 text-[14px] font-bold tracking-tight ${amountColor}`}>
                                        {transaction.amount}
                                    </td>

                                    <td className="whitespace-nowrap py-5 px-6">
                                        <div className="flex items-center gap-2">
                                            <span className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}></span>
                                            <span className={`text-[13px] font-bold capitalize ${statusStyles.text}`}>
                                                {transaction.status}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="whitespace-nowrap py-5 px-6 text-center">
                                        <div className="flex justify-center gap-1">
                                            <button
                                                onClick={() => setViewModalData(transaction)}
                                                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-800"
                                                title="View Transaction"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                onClick={() => setEditModalData(transaction)}
                                                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                                title="Edit Transaction"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                            <button
                                                onClick={() => setDeleteModalData(transaction)}
                                                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                                                title="Delete Transaction"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 p-6 sm:flex-row">
                <div className="text-[14px] font-medium text-gray-500">
                    Showing <span className="font-bold text-gray-800">1 to {currentTransactions.length}</span> of <span className="font-bold text-gray-800">1,284</span> transactions
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 disabled:opacity-50"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f97316] text-[13px] font-bold text-white shadow-sm">
                        1
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-[13px] font-bold text-gray-600 transition-colors hover:bg-gray-50 shadow-sm bg-white">
                        2
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-[13px] font-bold text-gray-600 transition-colors hover:bg-gray-50 shadow-sm bg-white">
                        3
                    </button>

                    <span className="flex h-9 w-9 items-center justify-center text-gray-400 tracking-widest text-sm">...</span>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-[13px] font-bold text-gray-600 transition-colors hover:bg-gray-50 shadow-sm bg-white">
                        32
                    </button>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 shadow-sm bg-white"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
            <ViewTransactionModal
                transaction={viewModalData}
                onClose={() => setViewModalData(null)}
            />
            <EditTransactionModal
                transaction={editModalData}
                onClose={() => setEditModalData(null)}
                onSave={handleSaveEdit}
            />
            <DeleteTransactionModal
                transaction={deleteModalData}
                onClose={() => setDeleteModalData(null)}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default TransactionTable;
