import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import type {DataPermission} from '../types';

const Permissions: React.FC = () => {
    const [permissions, setPermissions] = useState<DataPermission[]>([
        {
            category: 'assets',
            label: 'Assets',
            description: 'Access to your assets like bank accounts, properties, and other holdings.',
            isEnabled: true
        },
        {
            category: 'liabilities',
            label: 'Liabilities',
            description: 'Access to your liabilities such as loans, credit card debts, and other obligations.',
            isEnabled: true
        },
        {
            category: 'transactions',
            label: 'Transactions',
            description: 'Access to your transaction history, including deposits, withdrawals, and purchases.',
            isEnabled: true
        },
        {
            category: 'retirement',
            label: 'Retirement Balance',
            description: 'Access to your retirement savings balance, including contributions and returns.',
            isEnabled: false
        },
        {
            category: 'credit',
            label: 'Credit Score',
            description: 'Access to your credit score and credit report details.',
            isEnabled: false
        },
        {
            category: 'investments',
            label: 'Investments',
            description: 'Access to your investment portfolio, including stocks, bonds, and other investments.',
            isEnabled: true
        }
    ]);

    const togglePermission = (category: DataPermission['category']) => {
        setPermissions(prev =>
            prev.map(permission =>
                permission.category === category
                    ? { ...permission, isEnabled: !permission.isEnabled }
                    : permission
            )
        );
    };

    const handleSave = () => {
        // TODO: Save to API
        alert('Permissions saved successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Manage Data Access</h1>
                    <p className="text-gray-600">Control which financial data categories our application can access. Your privacy is important to us.</p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-6">
                    {permissions.map((permission) => (
                        <Card key={permission.category}>
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {permission.label}
                                        </h3>
                                        <div className="ml-2">
                                            {permission.isEnabled ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Enabled
                        </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Disabled
                        </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {permission.description}
                                    </p>
                                </div>

                                <div className="ml-6">
                                    <button
                                        type="button"
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                                            permission.isEnabled ? 'bg-primary-600' : 'bg-gray-200'
                                        }`}
                                        onClick={() => togglePermission(permission.category)}
                                    >
                    <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            permission.isEnabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                    />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <Button onClick={handleSave} variant="primary" size="lg">
                        Save Changes
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Permissions;
