import React from 'react';
import { Link } from 'react-router-dom';

interface Transaction {
    date: string;
    description: string;
    category: string;
    amount: string;
    categoryColor: string;
    amountColor: string;
}

const TransactionsTable: React.FC = () => {
    const transactions: Transaction[] = [
        {
            date: '2024-07-20',
            description: 'Grocery shopping at Local Market',
            category: 'Groceries',
            amount: '-$150.00',
            categoryColor: 'text-purple-800 bg-purple-100',
            amountColor: 'text-red-600'
        },
        {
            date: '2024-07-19',
            description: 'Salary deposit',
            category: 'Income',
            amount: '+$5,000.00',
            categoryColor: 'text-green-800 bg-green-100',
            amountColor: 'text-green-600'
        },
        {
            date: '2024-07-18',
            description: 'Rent payment',
            category: 'Housing',
            amount: '-$1,500.00',
            categoryColor: 'text-blue-800 bg-blue-100',
            amountColor: 'text-red-600'
        },
        {
            date: '2024-07-17',
            description: 'Dinner at The Bistro',
            category: 'Dining',
            amount: '-$80.00',
            categoryColor: 'text-yellow-800 bg-yellow-100',
            amountColor: 'text-red-600'
        },
        {
            date: '2024-07-16',
            description: 'Online shopping',
            category: 'Shopping',
            amount: '-$200.00',
            categoryColor: 'text-indigo-800 bg-indigo-100',
            amountColor: 'text-red-600'
        }
    ];

    return (
        <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Recent Transactions</h2>
            <div className="bg-white border border-[var(--border-color)] rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3" scope="col">Date</th>
                            <th className="px-6 py-3" scope="col">Description</th>
                            <th className="px-6 py-3" scope="col">Category</th>
                            <th className="px-6 py-3 text-right" scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className={`bg-white ${index < transactions.length - 1 ? 'border-b' : ''} hover:bg-gray-50`}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{transaction.date}</td>
                                <td className="px-6 py-4">{transaction.description}</td>
                                <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${transaction.categoryColor}`}>
                                            {transaction.category}
                                        </span>
                                </td>
                                <td className={`px-6 py-4 text-right font-medium ${transaction.amountColor}`}>{transaction.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-200">
                    <Link className="text-sm font-medium text-[var(--primary-color)] hover:text-[var(--primary-hover-color)]" to="/app/transactions">
                        View all transactions →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TransactionsTable;
