import React, { useState } from 'react';
import type {TransactionFormData} from '../../types/forms';

interface TransactionFormProps {
    onSubmit: (data: TransactionFormData) => Promise<void>;
    onClose: () => void;
    isOpen: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, onClose, isOpen }) => {
    const [formData, setFormData] = useState<TransactionFormData>({
        date: new Date().toISOString().split('T')[0],
        description: '',
        category: '',
        amount: 0,
        type: 'expense'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        'salary', 'freelance', 'bonus', 'groceries', 'utilities', 'rent',
        'dining', 'shopping', 'transportation', 'healthcare', 'entertainment',
        'education'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'amount' ? parseFloat(value) || 0 : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await onSubmit({
                ...formData,
                amount: formData.type === 'expense' ? -Math.abs(formData.amount) : Math.abs(formData.amount)
            });
            onClose();
            setFormData({
                date: new Date().toISOString().split('T')[0],
                description: '',
                category: '',
                amount: 0,
                type: 'expense'
            });
        } catch (error) {
            console.error('Error adding transaction:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Add Transaction</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="e.g., Grocery shopping"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        >
                            <option value="">Select category</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount || ''}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Adding...' : 'Add Transaction'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionForm;
