import React, { useState } from 'react';
import type {InvestmentFormData} from '../../types/forms';

interface InvestmentFormProps {
    onSubmit: (data: InvestmentFormData) => Promise<void>;
    onClose: () => void;
    isOpen: boolean;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onSubmit, onClose, isOpen }) => {
    const [formData, setFormData] = useState<InvestmentFormData>({
        name: '',
        ticker: '',
        type: '',
        quantity: 0,
        current_value: 0
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const investmentTypes = ['stock', 'mutual_fund', 'etf', 'bond', 'crypto'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: ['quantity', 'current_value'].includes(name) ? parseFloat(value) || 0 : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await onSubmit(formData);
            onClose();
            setFormData({ name: '', ticker: '', type: '', quantity: 0, current_value: 0 });
        } catch (error) {
            console.error('Error adding investment:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Add Investment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Investment Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Tata Consultancy Services"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ticker Symbol</label>
                        <input
                            type="text"
                            name="ticker"
                            value={formData.ticker}
                            onChange={handleChange}
                            placeholder="e.g., TCS"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        >
                            <option value="">Select type</option>
                            {investmentTypes.map(type => (
                                <option key={type} value={type}>
                                    {type.replace('_', ' ').charAt(0).toUpperCase() + type.replace('_', ' ').slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity || ''}
                            onChange={handleChange}
                            step="0.0001"
                            min="0"
                            placeholder="0"
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Value (₹)</label>
                        <input
                            type="number"
                            name="current_value"
                            value={formData.current_value || ''}
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
                            {isSubmitting ? 'Adding...' : 'Add Investment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InvestmentForm;
