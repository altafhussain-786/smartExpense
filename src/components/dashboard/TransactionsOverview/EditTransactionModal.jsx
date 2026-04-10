import { useState, useEffect } from "react";
import { X } from "lucide-react";

const EditTransactionModal = ({ transaction, onClose, onSave }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (transaction) {
            setFormData(transaction);
        }
    }, [transaction]);

    if (!transaction) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl pt-5">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Edit Transaction</h2>
                    <button onClick={onClose} type="button" className="rounded-full p-1.5 transition-colors hover:bg-gray-100">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Merchant</label>
                        <input type="text" name="merchant" value={formData.merchant || ""} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black" required />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Amount</label>
                        <input type="text" name="amount" value={formData.amount || ""} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black" required />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Date</label>
                        <input type="text" name="date" value={formData.date || ""} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Category</label>
                            <input type="text" name="category" value={formData.category || ""} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black" required />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" value={formData.status || "Completed"} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black">
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end gap-3 pt-2">
                        <button type="button" onClick={onClose} className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTransactionModal;
