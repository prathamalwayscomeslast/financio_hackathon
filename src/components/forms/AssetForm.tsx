import React, { useState } from 'react';
import type {AssetFormData} from '../../types/forms';

interface AssetFormProps {
    onSubmit: (data: AssetFormData) => Promise<void>;
    onClose: () => void;
    isOpen: boolean;
}

const AssetForm: React.FC<AssetFormProps> = ({ onSubmit, onClose, isOpen }) => {
    const [formData, setFormData] = useState<AssetFormData>({
        name: '',
        type: '',
        value: 0
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const assetTypes = [
        'bank_account', 'property', 'vehicle', 'jewelry', 'investment',
        'bank_deposit', 'cash', 'electronics', 'other'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'value' ? parseFloat(value) || 0 : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await onSubmit(formData);
            onClose();
            setFormData({ name: '', type: '', value: 0 });
        } catch (error) {
            console.error('Error adding asset:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Add Asset</h2>
    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
    <span className="material-symbols-outlined">close</span>
        </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Asset Name</label>
    <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="e.g., Savings Account - HDFC"
    required
    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
    />
    </div>

    <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Asset Type</label>
    <select
    name="type"
    value={formData.type}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
    >
    <option value="">Select type</option>
    {assetTypes.map(type => (
        <option key={type} value={type}>
        {type.replace('_', ' ').charAt(0).toUpperCase() + type.replace('_', ' ').slice(1)}
        </option>
    ))}
    </select>
    </div>

    <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Value (₹)</label>
        <input
    type="number"
    name="value"
    value={formData.value || ''}
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
        {isSubmitting ? 'Adding...' : 'Add Asset'}
        </button>
        </div>
        </form>
        </div>
        </div>
);
};

export default AssetForm;
