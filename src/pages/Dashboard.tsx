import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import { formatCurrency } from '../utils/formatters';
import type {FinancialData, Transaction} from '../types';

const Dashboard: React.FC = () => {
    const [financialData, setFinancialData] = useState<FinancialData | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // TODO: Replace with actual API calls
        setFinancialData({
            assets: 125000,
            liabilities: 35000,
            epfBalance: 20000,
            creditScore: 750,
            investments: 70000
        });

        setTransactions([
            {
                id: '1',
                date: '2024-07-20',
                description: 'Grocery shopping at Local Market',
                category: 'Groceries',
                amount: -150
            },
            {
                id: '2',
                date: '2024-07-19',
                description: 'Salary deposit',
                category: 'Income',
                amount: 5000
            }
        ]);
    }, []);

    if (!financialData) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600">Welcome back, let's check your financial health.</p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Financial Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <FinancialCard
                        title="Total Assets"
                        amount={financialData.assets}
                        change={5}
                        icon="📈"
                        trend="up"
                    />
                    <FinancialCard
                        title="Total Liabilities"
                        amount={financialData.liabilities}
                        change={-2}
                        icon="📉"
                        trend="down"
                    />
                    <FinancialCard
                        title="EPF Balance"
                        amount={financialData.epfBalance}
                        change={3}
                        icon="🏦"
                        trend="up"
                    />
                    <FinancialCard
                        title="Credit Score"
                        amount={financialData.creditScore}
                        change={1}
                        icon="⭐"
                        trend="up"
                        isScore
                    />
                    <FinancialCard
                        title="Investment Portfolio"
                        amount={financialData.investments}
                        change={4}
                        icon="💰"
                        trend="up"
                    />
                </div>

                {/* Recent Transactions */}
                <Card className="overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transaction.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {transaction.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {transaction.category}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </main>
        </div>
    );
};

// Financial Card Component
interface FinancialCardProps {
    title: string;
    amount: number;
    change: number;
    icon: string;
    trend: 'up' | 'down';
    isScore?: boolean;
}

const FinancialCard: React.FC<FinancialCardProps> = ({
                                                         title,
                                                         amount,
                                                         change,
                                                         icon,
                                                         trend,
                                                         isScore = false
                                                     }) => {
    const trendColor = trend === 'up' ? 'text-green-600' : 'text-red-600';
    const trendBg = trend === 'up' ? 'bg-green-100' : 'bg-red-100';

    return (
        <Card>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center text-2xl">
                        {icon}
                    </div>
                </div>
                <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
                    </div>
                    <div className="mt-2 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900">
                            {isScore ? amount : formatCurrency(amount)}
                        </p>
                    </div>
                    <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${trendBg} ${trendColor} mt-2`}>
            <span className="mr-1">
              {trend === 'up' ? '↑' : '↓'}
            </span>
                        {Math.abs(change)}% {isScore ? 'since last check' : 'vs last month'}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Dashboard;
