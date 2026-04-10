import { X, AlertTriangle } from "lucide-react";

const DeleteTransactionModal = ({ transaction, onClose, onDelete }) => {
    if (!transaction) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center">
                <div className="absolute right-4 top-4">
                    <button onClick={onClose} className="rounded-full p-1.5 transition-colors hover:bg-gray-100">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>
                
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <AlertTriangle size={28} className="text-red-600" />
                </div>
                
                <h2 className="mb-2 text-xl font-bold text-gray-800">Delete Transaction</h2>
                <p className="mb-8 text-sm text-gray-500 leading-relaxed">
                    Are you sure you want to delete the transaction from <span className="font-semibold text-gray-700">{transaction.merchant}</span>? This action cannot be undone.
                </p>
                
                <div className="flex w-full justify-center gap-3">
                    <button onClick={onClose} className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onClick={() => onDelete(transaction.id)} className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTransactionModal;
